export const dynamic = 'force-dynamic';
import NotificationsList from "@/components/notificationsList/NotificationsList";
import pool from "@/app/libs/mysql";
const getData = async () => {
    try {
        const db = await pool;
        const q = `SELECT n.id, n.title, n.file_name, n.link_url, n.file_path, n.notification_date, n.category , n.department_scope , n.created_at
                    FROM notifications n
                    LEFT JOIN notification_ordering no ON n.id = no.notification_id 
                    AND no.context_type = 'page' AND no.context_value = 'Syllabus'
                    WHERE n.page_syllabus = 1 AND n.is_active = 1
                    ORDER BY no.position DESC, n.notification_date DESC;`
        const [results] = await db.query(q);
        return { results: results };
    } catch (err) {
        console.log("err : ", err);
        return err;
    }
}
const page = async () => {
    const { results } = await getData();
    return (
        <NotificationsList results={results} page_name={"Syllabus"} />
    );
};

export default page;
