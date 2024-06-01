<?php
namespace App\Controller;

use App\Entity\Application;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Request;
use Doctrine\Persistence\ManagerRegistry;
use App\Entity\Employee;
use App\Repository\EmployeeRepository;

#[Route("/api", name: "api_")]
class EmployeeController extends AbstractController
{


    private $employeeRepository ;

    public function __construct(
        EmployeeRepository $employeeRepository)
    {
        $this->employeeRepository = $employeeRepository ; 
    }


    #[Route("/employee", name: "app_employee", methods: ["GET"])]
    public function index(ManagerRegistry $doctrine): Response
    {
        $employees = $doctrine
            ->getRepository(Employee::class)
            ->findAll();
        $data = [];
        foreach ($employees as $employee) {
            $data[] = [
               'id'         => $employee->getId(),
               'fullname'   => $employee->getFullname(),
               'email'      => $employee->getEmail(),
                'password'  => $employee->getPassword(),
               'degree'     => $employee->getDegree(),
               'designation'=> $employee->getDesignation(),
               'address'    => $employee->getAddress(),
               'contact'    => $employee->getContact(),
            ];
        }
        return $this->json($data);
    }

    #[Route('/employee', name: 'add_employee', methods: ['POST'])]
    public function addEmployee(ManagerRegistry $doctrine, Request $request): Response
    {
        $entityManager = $doctrine->getManager();
        $employee = new Employee();
        $employee->setFullname($request->request->get('fullname'));
        $employee->setEmail($request->request->get('email'));
        $employee->setPassword($request->request->get('password'));
        $employee->setDegree($request->request->get('degree'));
        $employee->setDesignation($request->request->get('designation'));
        $employee->setAddress($request->request->get('address'));
        $employee->setContact($request->request->get('contact'));
        $entityManager->persist($employee);
        $entityManager->flush();
        return $this->json('New Employee has been added successfully with id ' . $employee->getId());
    }
    
    
    #[Route('/employee/{id}', name: 'employee_show', methods: ['GET'])]
    public function showEmployee(ManagerRegistry $doctrine, int $id): Response
    {
        $employee = $doctrine->getRepository(Employee::class)->find($id);
        if (!$employee) {
            return $this->json('No Employee found for id' . $id, 404);
        }
        $data =  [
            'id'        => $employee->getId(),
            'fullname'  => $employee->getFullname(),
            'email'      => $employee->getEmail(),
            'degree'     => $employee->getDegree(),
            'designation'=> $employee->getDesignation(),
            'address'    => $employee->getAddress(),
            'contact'    => $employee->getContact(),
            'password'  => $employee->getPassword(),
        ];
        return $this->json($data);
    }
     
    #[Route('/employee/{id}', name: 'employee_edit', methods: ['PUT', 'PATCH'])]
    public function editEmployee(ManagerRegistry $doctrine, Request $request, int $id): Response
    {
        $entityManager = $doctrine->getManager();
        $employee = $entityManager->getRepository(Employee::class)->find($id);
        if(!$employee){
            return $this->json('No Employee found for id' . $id, 404);
        }
        $content = json_decode($request->getContent());
        $employee->setFullname($content->fullname);
        $employee->setEmail($content->email);
        $employee->setPassword($content->password);
        $employee->setDegree($content->degree);
        $employee->setDesignation($content->designation);
        $employee->setAddress($content->address);
        $employee->setContact($content->contact);
        $entityManager->flush();
        $data = [
            'id'        => $employee->getId(),
            'name'       => $employee->getFullname(),
            'password'   => $employee->getPassword(),
            'email'      => $employee->getEmail(),
            'degree'     => $employee->getDegree(),
            'designation'=> $employee->getDesignation(),
            'address'    => $employee->getAddress(),
            'contact'    => $employee->getContact(),
            'password'  => $employee->getPassword(),
        ];
        return $this->json($data);
    }
     
    #[Route('/employee/{id}', name: 'employee_delete', methods: ['DELETE'])]
    public function delete(ManagerRegistry $doctrine, int $id): Response
    {
        $entityManager = $doctrine->getManager();
        $employee   = $entityManager->getRepository(Employee::class)->find($id);
    
        if (!$employee) {
            return $this->json('No Employee found for id' . $id, 404);
        }
        $entityManager->remove($employee);
    $entityManager->flush();
    return $this->json('Deleted a Employee successfully with id ' . $id);
   }

   #[Route('/inscription', name: 'insc')]
   public function inscription(ManagerRegistry $doctrine, Request $request): Response
   {

        $email = $request->request->get('email');
        $pass = $request->request->get('password');
        
        if($email == "" && $pass = ""){
            
            return $this->render("");
        }

        return $this->json('');
   }



}