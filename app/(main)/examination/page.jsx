
// Force dynamic rendering - ensures fresh data on every request
export const dynamic = 'force-dynamic';

import NotificationsList from "@/components/notificationsList/NotificationsList";
import pool from "@/app/libs/mysql";
const getData = async () => {
  try {
    const db = await pool;
    // const q = "SELECT * FROM notifications WHERE JSON_CONTAINS(page_targets, '[\"Exams Notifications\"]');";
    const q = `SELECT n.*
              FROM notifications n
              LEFT JOIN notification_ordering no ON n.id = no.notification_id 
              AND no.context_type = 'page' AND no.context_value = 'Exams Notifications'
              WHERE n.page_exams_notifications = 1 AND n.is_active = 1
              ORDER BY no.position DESC, n.notification_date DESC`
    const [results] = await db.query(q);
    return { results: results };
  } catch (err) {
    console.log("err : ", err);
    return err;
  }
}
const page = async () => {
  const { results } = await getData();
  console.log("results : ", results);
  // const results = [
  //   {
  //     sl: 1,
  //     title: "Reevaluation result of CSE 5th,6th & 8th Semester of May-2024 and DEC-2024",
  //     link: "/examination/results/1",
  //     department: "Department of Computer Science & Engg.",
  //     postingDate: "11 Nov-2025"
  //   },
  //   {
  //     sl: 2,
  //     title: "Reevaluation Result of B.Tech 1st,2nd,4th,5th,6th,7th & 8th sem DEC-2023 & MAY-2024 (Batch 2018-2020)",
  //     link: "/examination/results/2",
  //     department: "Department of Computer Science & Engg.",
  //     postingDate: "09 Nov-2025"
  //   },
  //   {
  //     sl: 3,
  //     title: "Special Reevaluation result of ECE 7th Semester",
  //     link: "/examination/results/3",
  //     department: "Department of Electronics & Communication Engg.",
  //     postingDate: "2 Nov-2025"
  //   },
  //   {
  //     sl: 4,
  //     title: "Reevaluation result of CSE 5th,6th & 8th Semester of May-2024 and DEC-2024",
  //     link: "/examination/results/4",
  //     department: "Department of Electronics & Communication Engg.",
  //     postingDate: "26 Oct-2025"
  //   },
  //   {
  //     sl: 5,
  //     title: "B.Tech. CSE 4th sem-ECE -ME 6th sem May 23 Reevaluation result 30-01-24",
  //     link: "/examination/results/5",
  //     department: "Others",
  //     postingDate: "11 Nov-2025"
  //   },
  //   {
  //     sl: 6,
  //     title: "Re-evaluation application form for Dec. 23/May 24 Exam (only for 2018 to 2020 batch)",
  //     link: "/examination/results/6",
  //     department: "Department of Computer Science & Engg.",
  //     postingDate: "01 Oct-2025"
  //   }
  // ];

  return (
    <NotificationsList results={results} page_name={"Exams Notifications"} />
  );
};

export default page;
