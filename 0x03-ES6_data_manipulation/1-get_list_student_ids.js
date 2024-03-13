const getListStudentIds = (liststudents) => {
  let liststudentsIds = [];
  if (!(liststudents instanceof Array)) {
    return liststudentsIds;
  }
  liststudentsIds = liststudents.map((student) => student.id);
  return liststudentsIds;
};

export default getListStudentIds;
