import React from 'react'
import BulletinTicker from './BulletinTicker'
import pool from '@/app/libs/mysql'

const getData = async () => {
  try {
    const db = await pool;
    // const q1 = "SELECT title, file_name, link_url, file_path  FROM notifications where show_in_bulletin_1 = 1;";
    const q1 = `SELECT n.title, n.file_name, n.link_url, n.file_path
                FROM notifications n
                LEFT JOIN notification_ordering no ON n.id = no.notification_id 
                  AND no.context_type = 'bulletin' AND no.context_value = 'bulletin_1'
                WHERE n.show_in_bulletin_1 = 1 AND n.is_active = 1
                ORDER BY no.position DESC, n.notification_date DESC`;
    const [bulletin1Data] = await db.query(q1);

    // const q2 =
    //   "SELECT title, file_name, link_url, file_path FROM notifications WHERE show_in_bulletin_2 = 1";
    const q2 = `SELECT n.title, n.file_name, n.link_url, n.file_path
                FROM notifications n
                LEFT JOIN notification_ordering no ON n.id = no.notification_id 
                  AND no.context_type = 'bulletin' AND no.context_value = 'bulletin_2'
                WHERE n.show_in_bulletin_2 = 1 AND n.is_active = 1
                ORDER BY no.position DESC, n.notification_date DESC`;
    const [bulletin2Data] = await db.query(q2);


    return { bulletin1Data: bulletin1Data, bulletin2Data: bulletin2Data };
  } catch (err) {
    console.log("err : ", err);
    return err;
  }
};

const BulletinWrapper = async () => {



  const { bulletin1Data, bulletin2Data } = await getData();
  console.log("bulletin1Data : ", bulletin1Data);
  console.log("bulletin2Data : ", bulletin2Data);
  return (
    <>
      <BulletinTicker
        tagline="Bulletin"
        items={bulletin1Data}
        sectionClass="Bulletin"
        taglineColClass="col-md-2"
        tickerColClass="col-md-10"
      />
      <BulletinTicker

        tagline="Admissions 2025-26"
        items={bulletin2Data}
        sectionClass="Bulletin admission-notifaction"
        taglineColClass="col-md-3"
        tickerColClass="col-md-9"
      />
    </>
  )
}

export default BulletinWrapper
