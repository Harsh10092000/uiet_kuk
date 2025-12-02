const BulletinTicker = ({
  tagline,
  items = [{title: "", file_name: "", link_url: "", file_path: ""}],
  sectionClass,
  taglineColClass,
  tickerColClass,
}) => {
  return (
    <section className={sectionClass}>
      <div className="container">
        <div className="bg-light-gray">
          <div className="row">
            <div className={taglineColClass}>
              <div className="tagline">{tagline}</div>
            </div>
            <div className={tickerColClass}>
              <div className="list-news">
                <marquee direction="left">
                  {items.map((item, index) => (
                    item.link_url ? (
                      <a key={index} href={item.link_url} target="_blank" rel="noreferrer">
                        <b>{item.title}</b>
                      </a>
                    ) : item.file_name ? (
                      <a key={index} href={`${process.env.BACKEND_URL}/${item.file_path}`} target="_blank" rel="noreferrer">
                        <b>{item.title}</b>
                      </a>
                    ) : (
                      <b>{item.title}</b>
                    )
                  ))}
                </marquee>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    
  );
};

export default BulletinTicker;

