import { Button, Dropdown, Radio, Space } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { useState } from 'react';
import './radioGroupMenu.scss';
const RadioGroupMenu = ({ options, groupName }) => {
  const [value, setValue] = useState(null);
  const [open, setOpen] = useState(false);
  const [hasSelection, setHasSelection] = useState(false);

  const handleOpenChange = (nextOpen, info) => {
    if (info.source === 'trigger' || nextOpen) {
      //nextOpen: data-type boolean, được tự động truyền vào bởi Dropdown component của Ant Design thông qua callback onOpenChange.
      //info: data-type object, được tự động truyền vào bởi Dropdown component của Ant Design.
      // thuộc tính source chứa thông tin về nguồn gốc của sự kiện thay đổi trạng thái (ví dụ: 'trigger', 'click', 'hover').
      setOpen(nextOpen);
    }
  };
  const handleChange = e => {
    setValue(e.target.value);
    setHasSelection(true); //cập nhật state khi cố option được chọn
  };
  const menuItems = [
    {
      label: (
        <Radio.Group onChange={handleChange} value={value}>
          <Space direction="vertical">
            {options.map(option => (
              <Radio
                key={option.value}
                value={option.value}
                className="w-full custom_radio"
              >
                <strong>{option.label}</strong>
              </Radio>
            ))}
          </Space>
        </Radio.Group>
      ),
      key: '0',
    },
  ];
  return (
    <Dropdown
      menu={{ items: menuItems }}
      onOpenChange={handleOpenChange}
      open={open}
      trigger={['click']}
      overlayClassName={hasSelection ? 'dropdown-selected' : ''}
    >
      <Button type="text" className={hasSelection ? 'button-selected' : ''}>
        {groupName}
        <DownOutlined />
      </Button>
      {/*  */}
    </Dropdown>
  );
};

export default RadioGroupMenu;
