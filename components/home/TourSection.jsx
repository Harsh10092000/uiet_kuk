import NotificationMarqueeUp from './NotificationMarqueeUp'
import pool from '@/app/libs/mysql'
const getData = async () => {
  try {
    const db = await pool;

    const q1 = "SELECT * FROM notifications where show_on_announcements_slider = 1";
    const [announcementsData] = await db.query(q1);

    const q2 = "SELECT * FROM notifications where show_on_notification_slider = 1";
    const [notificationsData] = await db.query(q2);

    return { announcementsData: announcementsData, notificationsData: notificationsData };
  } catch (err) {
    console.log("err : ", err);
    return err;
  }
}
const TourSection = async () => {
  const { announcementsData, notificationsData } = await getData();
  console.log("announcementsData : ", announcementsData);
  console.log("notificationsData : ", notificationsData);
  return (
    <section className="take-a-tour bg-gray pt-5 pb-5">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div className="video-block">
              <h2>Take a Tour</h2>
              <div className="video">
                <iframe
                  width="100%"
                  height="315"
                  src="https://www.youtube.com/embed/4t4_K1Xq5Sc?si=wQGB9oexOxHvTGvt&amp;start=15"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
              </div>
              <a href="#" className="admission-update">
                Admission Updates
              </a>
            </div>
          </div>
          <div className="col-md-4">
            <div className="btn-list">
              <ul>
                <li>
                  <a href="#" className="gradient-btn">
                    Library details
                  </a>
                </li>
                <li>
                  <a href="#" className="gradient-btn">
                    Fee Stucture for B.Tech Courses
                  </a>
                </li>
                <li>
                  <a href="#" className="gradient-btn">
                    National Cadet Corps
                  </a>
                </li>
                <li>
                  <a href="#" className="gradient-btn">
                    Application form
                  </a>
                </li>
                <li>
                  <a href="#" className="gradient-btn">
                    Say No to Ragging
                  </a>
                </li>
                <li>
                  <a href="#" className="gradient-btn">
                    Scholarship Notice
                  </a>
                </li>
                <li>
                  <a href="#" className="gradient-btn">
                    University Notices
                  </a>
                </li>
                <li>
                  <a href="#" className="gradient-btn">
                    Miscellaneous Notices
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-4">
            <div className="notification-block">
              <h4>
                <span>
                  <img src="/announment.png" alt="icon" />
                </span>
                Announcements
              </h4>
              <marquee direction="up" scrollAmount="2" height="160px">
             <NotificationMarqueeUp items={announcementsData} />
             </marquee>
            </div>

            <div className="notification-block mt-3">
              <h4>
                <span>
                  <img src="/notification.png" alt="icon" />
                </span>
                Notifications
              </h4>
              <marquee direction="up" scrollAmount="2" height="160px">
             <NotificationMarqueeUp items={notificationsData} />
             </marquee>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TourSection;

