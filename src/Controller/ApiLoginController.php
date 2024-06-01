<?php

namespace App\Controller;

use App\Entity\User;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class ApiLoginController extends AbstractController
{
    #[Route('/api/login', name: 'app_api_login')]
    public function index(Request $request, EntityManagerInterface $entityManager): JsonResponse
    {
        $requestData = json_decode($request->getContent(), true);

        $username = $requestData['username'] ?? null;
        $password = $requestData['password'] ?? null;

        if (!$username || !$password) {
            return new JsonResponse(['success' => false, 'message' => 'Missing username or password'], Response::HTTP_BAD_REQUEST);
        }

        $userRepository = $entityManager->getRepository(User::class);
        $user = $userRepository->findOneBy(['username' => $username]);

        if (!$user || !password_verify($password, $user->getPassword())) {
            return new JsonResponse(['success' => false, 'message' => 'Incorrect username or password'], Response::HTTP_UNAUTHORIZED);
        }

        return new JsonResponse(['success' => true]);
    }
}
