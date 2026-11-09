// Problem 1:...........

const multiplyValue =(value: number, multiplier?: number) =>{
if(value && multiplier){
    const result = value* multiplier
    console.log(result)
}
else if(!multiplier){
const result = value * 2
 console.log(result)
}
}
// multiplyValue(10);
// multiplyValue(10, 5);
// multiplyValue(7, 0);

// Problem 2:...........

const processInput=(input: string | number | boolean):string | number=>{
if(typeof input === "string"){
    const result=input.trim().toLowerCase();
    console.log(result)
    return result
}
else if(typeof input === "number"){
    const result=input * 10;
    console.log(result)
    return result
}
else {
  const result = input ? "Active" : "Inactive";
  console.log(result)
  return result
}

// else if(typeof input === "true"){
//     const result= "Active";
//     console.log(result)
// }
// else if(typeof input === "false"){
//     const result= "Active";
//     console.log(result)
// }
}

// processInput("  TypeScript  ");
// processInput(7);
// processInput(true);
// processInput(false);


// Problem 3:..........
function formatCoordinate(coordinate: readonly [number, number, string]): string {
  const [latitude, longitude, locationName] = coordinate;

  return `Location: ${locationName} (${latitude}, ${longitude})`;
}

// console.log(formatCoordinate([23.81, 90.41, "Dhaka"]));
// console.log(formatCoordinate([22.35, 91.78, "Chittagong"]));

// problem- 4.............
function concatenateArrays <T>(...arrays: T[][]) :T[]{
 return arrays.flat();
}

// console.log(concatenateArrays(["a", "b"], ["c", "d"]))


// problem-5............

interface Course {
  title: string;
  students: number;
  isPublished: boolean;
}

const getPopularCourses = (courses: Course[],minStudents: number): Course[] => {
  return courses.filter(
    (course) =>
      course.isPublished === true &&
      course.students >= minStudents
  );
};

// Sample Input
const courses: Course[] = [
  { title: "TypeScript Mastery", students: 120, isPublished: true },
  { title: "Draft Course", students: 200, isPublished: true },
  { title: "Basic HTML", students: 45, isPublished: true },
  { title: "Next.js Pro", students: 85, isPublished: true }
];

// const result = getPopularCourses(courses, 100);

//  problem-6.........

function pluckValues<T, K extends keyof T>(items: T[], key: K): T[K][] {
  return items.map((item) => item[key]);
}


const users = [
  { id: 1, name: "dim", role: "Admin" },
  { id: 2, name: "Sadia", role: "Editor" },
  { id: 3, name: "ashik", role: "Subscriber" }
];

const names = pluckValues(users, "name");
const ids = pluckValues(users, "id");
const roles = pluckValues(users, "role");

console.log(names);
console.log(ids);
console.log(roles);


// problem-7.......

class Employee {
  protected name: string;
  private baseSalary: number;

  constructor(name: string, baseSalary: number) {
    this.name = name;
    this.baseSalary = baseSalary;
  }

  getDetails(): string {
    return `Employee: ${this.name}, Base Salary: ${this.baseSalary}`;
  }
}

class Manager extends Employee {
  private department: string;

  constructor(
    name: string,
    baseSalary: number,
    department: string
  ) {
    super(name, baseSalary);
    this.department = department;
  }

  getRoleInfo(): string {
    return `Manager of ${this.department}: ${this.name}`;
  }
}

// Sample Input:
const manager = new Manager("Alice", 50000, "Engineering");
// console.log(manager.getDetails())
// console.log(manager.getRoleInfo())


// problem-8


const validateAgeAsync = (age: number): Promise<string> => {
  return new Promise((resolve, reject) => {
    if (age < 18) {
      reject(new Error("Access Denied: Must be 18 or older"));
    } else {
      setTimeout(() => {
        resolve("Access Granted");
      }, 1000);
    }
  });
};

// console.log(validateAgeAsync(10))

// Sample Output 1 (resolves after 1 second):
// "Access Granted"

// Sample Input 2:
// console.log(validateAgeAsync(35))

// Sample Output 2 (rejects with Error):
// Error: Access Denied: Must be 18 or older