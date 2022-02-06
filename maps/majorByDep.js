import findMajor from "./findMajor.js";

export default function majorByDep(data) {
  let departments = [];

  data.forEach((vote) => {
    let department = departments.find((el) => el.name === vote[5]);

    if (!department) {
      departments.push({ name: vote[5], votes: [] });
      department = departments.find((el) => el.name === vote[5]);
    }

    department.votes.push(vote[6]);
  });

  departments.forEach(department => department.major = findMajor(department.votes));
  
  return departments;
}