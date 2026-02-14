export const dynamic = 'force-dynamic';

import NotificationsList from "@/components/notificationsList/NotificationsList";
import pool from "@/app/libs/mysql";
const getData = async () => {
    try {
        const db = await pool;
        const q = `
                    
                    SELECT n.id, n.title, n.file_name, n.link_url, n.file_path, n.notification_date, n.category, n.department_scope , n.created_at
FROM notifications n
LEFT JOIN notification_ordering no ON n.id = no.notification_id 
  AND no.context_type = 'page' AND no.context_value = 'Notifications'
WHERE n.page_notifications = 1 AND n.is_active = 1
ORDER BY no.position DESC, n.notification_date DESC;`
        const [results] = await db.query(q);
        return { results: results };
    } catch (err) {
        console.console.log("err : ", err);
        return err;
    }
}
export const metadata = {
    title: "Notifications | UIET KUK",
    description: "Latest news, announcements, and circulars from UIET Kurukshetra.",
    openGraph: {
        title: "Notifications | UIET KUK",
        description: "Latest news, announcements, and circulars from UIET Kurukshetra.",
        images: [
            {
                url: "/uiet-logo.png",
                width: 800,
                height: 600,
                alt: "UIET Kurukshetra Logo",
            },
        ],
        locale: "en_IN",
        type: "website",
    },
};

const Page = async () => {
    const { results } = await getData();
    return (
        <NotificationsList results={results} page_name={"Notifications"} />
    );
};

export default Page;
