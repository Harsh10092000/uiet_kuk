import React from 'react'

export const deptTypes = [
    {id: 1, name: 'All Departments', value: 'All Departments'},
   {id: 2, name: 'Computer science and Engineering', value: 'Computer science and Engineering'},
   {id: 3, name: 'Electronics & Communication Engineering', value: 'Electronics & Communication Engineering'},
   {id: 4, name: 'Electrical and Computer Engineering', value: 'Electrical and Computer Engineering'},
   {id: 5, name: 'Mechanical Engineering', value: 'Mechanical Engineering'},
   {id: 6, name: 'Bio-Technology', value: 'Bio-Technology'},
   {id: 7, name: 'Industrial & Production', value: 'Industrial & Production'},
   {id: 8, name: 'Thermal Engg.', value: 'Thermal Engg.'},
   {id: 9, name: 'Electrical Engg.', value: 'Electrical Engg.'},
   {id: 10, name: 'Defence Technology', value: 'Defence Technology'},
   {id: 11, name: 'Others', value: 'Others'},
]


export const slideShowTypes = [
    {id: 1, name: 'Admission Updates', value: 'Admission Updates'},
    {id: 2, name: 'Announcements', value: 'Announcements'},
    {id: 3, name: 'Notifications', value: 'Notifications'},
]


export const bulletinTypes = [
    {id: 1, name: 'Bulletin 1', value: 'Bulletin 1'},
    {id: 2, name: 'Bulletin 2', value: 'Bulletin 2'},
]


export const NotificationsPageTypes = [
    {id: 1, name: 'Announcements', value: 'Announcements'},
    {id: 2, name: 'Notifications', value: 'Notifications'},
    {id: 3, name: 'Admission Updates', value: 'Admission Updates'},
    {id: 4, name: 'Exams Notifications', value: 'Exams Notifications'},
    {id: 5, name: 'Results', value: 'Results'},
    {id: 6, name: 'Syllabus', value: 'Syllabus'},
    {id: 7, name: 'Datesheet', value: 'Datesheet'},
    {id: 8, name: 'Reports', value: 'Reports'},
    {id: 9, name: 'Aicte Reports', value: 'Aicte Reports'},
    {id: 10, name: 'Policies', value: 'Policies'},
    {id: 11, name: 'News & Updates', value: 'News & Updates'},
]

// Department mapping: full name -> short form
export const DEPT_SHORT_FORMS = {
  "All Departments": "All Departments",
  "Computer science and Engineering": "CSE",
  "Electronics & Communication Engineering": "ECE",
  "Electrical and Computer Engineering": "ECE",
  "Mechanical Engineering": "ME",
  "Bio-Technology": "BT",
  "Industrial & Production": "IPE",
  "Thermal Engg.": "TE",
  "Electrical Engg.": "EE",
  "Defence Technology": "DT",
  Others: "Others",
};

// department_scope helper: supports JSON string or array
export const parseDepartmentScope = (scope) => {
  if (!scope) return [];
  if (Array.isArray(scope)) return scope;
  if (typeof scope === "string") {
    try {
      const parsed = JSON.parse(scope);
      if (Array.isArray(parsed)) return parsed;
    } catch {
      // plain string (single department)
      return [scope];
    }
    return [scope];
  }
  return [];
};

// For UI display: comma-separated short forms
export const getDeptShortForm = (scope) => {
  const departments = parseDepartmentScope(scope);
  if (!departments.length) return "";
  const mapped = departments.map((name) => DEPT_SHORT_FORMS[name] || name);
  return mapped.join("/");
};