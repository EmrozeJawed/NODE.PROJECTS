#! /usr/bin/env node

import inquirer from "inquirer";
import { exit } from "process";
interface studentInterface {
  id?: number;
  name: string;
  balance: number;
  courseEnrolled: string[];
  feesPaid: boolean;
}

interface questionInterface {
  choice: string
}

interface answerInterface {
  name: string;
  balance: number;
  courses: string[];
  payFees: string;
}

class ManagementSystem {
  newStudent: studentInterface = {
    id: 0,
    name: "",
    balance: 0,
    courseEnrolled: [""],
    feesPaid: false,

  };
  students: studentInterface[] = [];
  newStudentBalance: number = 0;
  addNewstudent(newStudent: studentInterface) {
    this.students = [...this.students, newStudent];
    this.newStudentBalance = newStudent.balance
  }
  viewbalance() {
    if (this.students.length == 0) {
      console.log("No students have been enroled")
      return
    }
    return this.newStudentBalance
  }
  showStatusOfAllstudents() {
    if (this.students.length == 0) {
      console.log("No students have been enroled")
      return;
    }
    this.students.map((stnt) => {
      console.log(`id ${stnt.id}\nname: ${stnt.name}\nbalance: ${stnt.balance}\nCourses Enrolled ${stnt.courseEnrolled}\nfees status ${stnt.feesPaid}\n`)
    })
  }
}

const system = new ManagementSystem();
async function main() {
  const questions: questionInterface = await inquirer.prompt([
    {
      type: "list",
      name: "choice",
      message: "choices",
      choices: [
        "Enroll new student",
        "Display all the students and their details",
        "Display the current student balance",
        "Exit",
      ],
    },
  ]);
  if (questions.choice === "Enroll new student") {
    const newStudent: answerInterface = await inquirer.prompt([
      {
        type: "input",
        name: "name",
        message: "Enter Your Name",
        default: "Emroze",
      },

      {
        type: "number",
        name: "balance",
        message: "Enter your balance [Minimum 500]",
        default: 0,
        validate: (answer: number) => {
          if (answer >= 500) {
            return true
          } else {
            console.log("\nbalance is too low.")
            return false
          }
        }

      },

      {
        type: "checkbox",
        name: "courses",
        message: "Choose the course for yourself",
        choices: ["Typescript", "Python", "Node.JS", "Next.JS"],
        default: "Javascript",
      },
      {
        type: "list",
        name: "payFees",
        message: "DO YOU WANT TO PAY THE FEES NOW?",
        choices: ["YES", "NO"],
      },
    ]);
    let feesstatus = false
    if (newStudent.payFees === "YES") {
      feesstatus = true;
      newStudent.balance -= 500;
    }
    const studentObj = {
      id: Math.floor(Math.random() * 999999) + 1000,
      name: newStudent.name,
      balance: newStudent.balance,
      courseEnrolled: newStudent.courses,
      feesPaid: feesstatus,
    };
    system.addNewstudent(studentObj);
    main();
  }



  if (questions.choice === "Display all the students and their details") {
    console.log("The status off all the students is: ")
    system.showStatusOfAllstudents();
    main();
  };
  if (questions.choice === "Display the current student balance") {
    console.log("The balance of this student is:")
    console.log(system.viewbalance())
    main();
  } if (questions.choice === "Exit") {
    return;
  }
}

main();

