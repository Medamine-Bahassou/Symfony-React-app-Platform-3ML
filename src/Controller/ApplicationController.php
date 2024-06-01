<?php

namespace App\Controller;

use App\Entity\Application;
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;


#[Route("/api", name: "api_")]
class ApplicationController extends AbstractController
{
    #[Route("/application", name: "app_application", methods: ["GET"])]
    public function index(ManagerRegistry $doctrine): Response
    {
        $application = $doctrine
            ->getRepository(Application::class)
            ->findAll();
        $data = [];
        foreach ($application as $application) {
            $data[] = [
               'id'         => $application->getId(),
               'fullname'   => $application->getFullName(),
               'email'      => $application->getEmail(),
                'phone'  => $application->getPhone(),
               'domain'     => $application->getDomain(),
               'experience'=> $application->getExperience(),
            ];
        }
        return $this->json($data);
    }


   #[Route('/application', name: 'add_application', methods: ['POST'])]
    public function addApplication(ManagerRegistry $doctrine, Request $request): Response
    {
        $entityManager = $doctrine->getManager();
        $application = new Application();
        $application->setFullname($request->request->get('fullName'));
        $application->setEmail($request->request->get('email'));
        $application->setPhone($request->request->get('phone'));
        $application->setDomain($request->request->get('domain'));
        $application->setExperience($request->request->get('experience'));
        $entityManager->persist($application);
        $entityManager->flush();
        return $this->json('Your Application has been added successfully with id ' . $application->getId());
    }

}
