import './workCard.scss';

const WorkCard = ({ workItem }) => {
  const { congViec, tenNguoiTao, avatar } = workItem;
  return (
    <div className="card_layout">
      <div className="work_image rounded-md overflow-hidden">
        <img src={congViec.hinhAnh} alt="" />
      </div>
      <div className="ad_by flex gap-2 items-center mt-3 ">
        <figure>
          <img src={avatar} alt="" />
        </figure>
        <span>
          Ad by{' '}
          <a href="" className="hover:underline">
            <b>{tenNguoiTao}</b>
          </a>
        </span>
      </div>
      <a href="" className="work_name hover:underline">
        {congViec.tenCongViec}
      </a>
      <div className="rating flex items-center gap-1">
        <i className="fa-solid fa-star fa-sm" />
        <strong>{congViec.saoCongViec}</strong>
        <span className="text-gray-400">({congViec.danhGia})</span>
      </div>
      <div className="price font-bold font-medium">
        <span>From US${congViec.giaTien}</span>
      </div>
    </div>
  );
};

export default WorkCard;
