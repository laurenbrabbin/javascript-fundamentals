const cohort = {
  name: 'May2022',
  id: 1234,
  students: ['Lauren', 'Lulu', 'Laurence']
};

const format = (cohort) => {
  console.log(`${cohort.id} - ${cohort.name} - ${cohort.students.length} students in this cohort`)
};

format(cohort)