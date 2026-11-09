
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

}


function formatCoordinate(coordinate: readonly [number, number, string]): string {
  const [latitude, longitude, locationName] = coordinate;

  return `Location: ${locationName} (${latitude}, ${longitude})`;
}


function concatenateArrays <T>(...arrays: T[][]) :T[]{
 return arrays.flat();
}


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


const courses: Course[] = [
  { title: "TypeScript Mastery", students: 120, isPublished: true },
  { title: "Draft Course", students: 200, isPublished: true },
  { title: "Basic HTML", students: 45, isPublished: true },
  { title: "Next.js Pro", students: 85, isPublished: true }
];



function pluckValues<T, K extends keyof T>(items: T[], key: K): T[K][] {
  return items.map((item) => item[key]);
}


const users = [
  { id: 1, name: "dim", role: "Admin" },
  { id: 2, name: "Sadia", role: "Editor" },
  { id: 3, name: "ashik", role: "Subscriber" }
];

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
