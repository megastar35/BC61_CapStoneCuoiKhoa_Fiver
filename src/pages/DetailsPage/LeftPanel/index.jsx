import { HomeOutlined, CheckCircleFilled, StarFilled } from '@ant-design/icons';
import './leftPanel.scss';
import avatar from '../../../assets/images/jenny-2x.jpg';
const LeftPanel = () => {
  return (
    <div className="left_panel basis-2/3">
      <div className="main_left_content ">
        <div className="work_type_link flex gap-2 mb-8 pt-3">
          <a href="/" target="_self">
            <HomeOutlined />
          </a>
          <p>/</p>
          <a href="#">tenLoaiCongViec</a>
          <p>/</p>
          <a href="#">tenChiTietLoai</a>
        </div>
        <div className="work_overview ">
          <h1 className="text-3xl font-bold pb-4">tenCongViec</h1>
          <div className="seller_overview mb-6 flex items-center gap-5">
            {/* avatar */}
            <div className="rounded-full overflow-hidden seller_avatar">
              <img src={avatar} alt="" className="w-14 h-14 object-cover" />
            </div>
            <div className="overview_profile">
              <div className="overview_top flex items-center">
                <div className="seller_name mr-2">tenNguoiTao</div>
                <div className="pro_badge flex text-sm gap-1 rounded-md bg-blue-800 text-white px-2">
                  <CheckCircleFilled style={{ fontSize: '12px' }} />
                  <p className="font-semibold">Pro</p>
                </div>
              </div>
              <div className="overview_bottom">
                <div className="rating flex">
                  <StarFilled />
                  <strong className="ratinng_score pl-1">4.0</strong>
                  <span className="rating_count pl-1 text-gray-500">(100)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftPanel;
