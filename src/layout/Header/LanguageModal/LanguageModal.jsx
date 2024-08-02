import { Button, Modal } from 'antd';
import { useState } from 'react';
import { GlobalOutlined } from '@ant-design/icons';
const LanguageModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <Button
        className="border-none leading-6 hover:text-green-600"
        onClick={showModal}
      >
        <span>
          <GlobalOutlined />
        </span>
        English
      </Button>
      <Modal
        title="Language Modal"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>Coming soon...</p>
      </Modal>
    </>
  );
};

export default LanguageModal;
