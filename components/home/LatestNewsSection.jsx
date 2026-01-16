import NotificationMarqueeUp from './NotificationMarqueeUp'
import pool from '@/app/libs/mysql'
const getData = async () => {
  try {
    const db = await pool;
    // const q = "SELECT * FROM notifications where show_on_admission_slider = 1";
    const q = `SELECT n.title, n.file_name, n.link_url, n.file_path
                FROM notifications n
                LEFT JOIN notification_ordering no ON n.id = no.notification_id 
                  AND no.context_type = 'slider' AND no.context_value = 'admission'
                WHERE n.show_on_admission_slider = 1 AND n.is_active = 1
                ORDER BY no.position DESC, n.notification_date DESC`;
    const [latestNotices] = await db.query(q);
    return { latestNotices: latestNotices };
  } catch (err) {
    console.log("err : ", err);
    return err;
  }
}

const LatestNewsSection = async () => {
  const { latestNotices } = await getData();
  console.log("latestNotices : ", latestNotices);
  const noticeLinks = [
    "University Notices",
    "College Notices",
    "Student Notices",
    "Employee’s Notices",
    "Miscellaneous Notices",
  ];

  // const latestNotices = [
  //   "Notification regarding PMS for the session 2025-26 for SC/BC students.",
  //   "Notification for inviting quotations for Cultural Directors or coaches",
  //   "TEN-DAY COACHING PROGRAMME FOR BANK PO (PRELIMINARY) EXAMINATION Application Form",
  //   "Admission Notice: Additional 10 Seats in BBA(H)",
  //   "International Gita Olympiad 2025",
  //   "Prospectus July 2025 (CDOE)",
  // ];

  const helplineData = [
    { label: "Security Officer", value: "7082113077" },
    { label: "Proctor", value: "3022 Intercom,7082113124" },
    { label: "ICCASH", value: "2986 Intercom,9812665659" },
    { label: "WSRC", value: "2727 Intercom,239665" },
  ];

  return (
    <section className="latest-news-link">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div className="btn-list">
              <ul>
                {noticeLinks.map((label, index) => (
                  <li key={index}>
                    <a href="#" className="gradient-btn red-btn">
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="col-md-4">
            <div className="latest-notice notification-block">
              <h5>Admission updates</h5>
              <marquee direction="up" scrollAmount="2" height="220px">
                <NotificationMarqueeUp items={latestNotices} />
              </marquee>
            </div>
            <div className="text-center mt-2">
              <a href="#" className="btn-red">
                View All
              </a>
            </div>
          </div>
          <div className="col-md-4">
            <div className="helpline-number latest-notice notification-block">
              <h5>
                Helpline Numbers for
                <br /> Women Safety
              </h5>
              <div className="table-responsive">
                <table className="table table-bordered table-sm">
                  <tbody>
                    {helplineData.map(({ label, value }) => (
                      <tr key={label}>
                        <td>{label}</td>
                        <td>{value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestNewsSection;

