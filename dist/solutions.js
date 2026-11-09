"use strict";
// Problem 1:...........
// Object.defineProperty(exports, "__esModule", { value: true });
const multiplyValue = (value, multiplier) => {
    if (value && multiplier) {
        const result = value * multiplier;
        console.log(result);
    }
    else if (!multiplier) {
        const result = value * 2;
        console.log(result);
    }
};
// multiplyValue(10);
// multiplyValue(10, 5);
// multiplyValue(7, 0);
// Problem 2:...........
const processInput = (input) => {
    if (typeof input === "string") {
        const result = input.trim().toLowerCase();
        console.log(result);
        return result;
    }
    else if (typeof input === "number") {
        const result = input * 10;
        console.log(result);
        return result;
    }
    else {
        const result = input ? "Active" : "Inactive";
        console.log(result);
        return result;
    }
    // else if(typeof input === "true"){
    //     const result= "Active";
    //     console.log(result)
    // }
    // else if(typeof input === "false"){
    //     const result= "Active";
    //     console.log(result)
    // }
};
// processInput("  TypeScript  ");
// processInput(7);
// processInput(true);
// processInput(false);
// Problem 3:..........
function formatCoordinate(coordinate) {
    const [latitude, longitude, locationName] = coordinate;
    return `Location: ${locationName} (${latitude}, ${longitude})`;
}
// console.log(formatCoordinate([23.81, 90.41, "Dhaka"]));
// console.log(formatCoordinate([22.35, 91.78, "Chittagong"]));
// problem- 4.............
function concatenateArrays(...arrays) {
    return arrays.flat();
}
const getPopularCourses = (courses, minStudents) => {
    return courses.filter((course) => course.isPublished === true &&
        course.students >= minStudents);
};
// Sample Input
const courses = [
    { title: "TypeScript Mastery", students: 120, isPublished: true },
    { title: "Draft Course", students: 200, isPublished: true },
    { title: "Basic HTML", students: 45, isPublished: true },
    { title: "Next.js Pro", students: 85, isPublished: true }
];
// const result = getPopularCourses(courses, 100);
//  problem-6.........
function pluckValues(items, key) {
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
    name;
    baseSalary;
    constructor(name, baseSalary) {
        this.name = name;
        this.baseSalary = baseSalary;
    }
    getDetails() {
        return `Employee: ${this.name}, Base Salary: ${this.baseSalary}`;
    }
}
class Manager extends Employee {
    department;
    constructor(name, baseSalary, department) {
        super(name, baseSalary);
        this.department = department;
    }
    getRoleInfo() {
        return `Manager of ${this.department}: ${this.name}`;
    }
}
// Sample Input:
const manager = new Manager("Alice", 50000, "Engineering");
// console.log(manager.getDetails())
// console.log(manager.getRoleInfo())
// problem-8
const validateAgeAsync = (age) => {
    return new Promise((resolve, reject) => {
        if (age < 18) {
            reject(new Error("Access Denied: Must be 18 or older"));
        }
        else {
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
