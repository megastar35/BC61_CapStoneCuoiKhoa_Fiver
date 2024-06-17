import { Button, Dropdown, Space } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import './sortTopBar.scss';
const SortTopBar = () => {
  const handleButtonClick = e => {
    message.info('Click on left button.');
    console.log('click left button', e);
  };
  const handleMenuClick = e => {
    message.info('Click on menu item.');
    console.log('click', e);
  };
  const items = [
    {
      label: '1st menu item',
      key: '1',
    },
    {
      label: '2nd menu item',
      key: '2',
    },
    {
      label: '3rd menu item',
      key: '3',
      danger: true,
    },
    {
      label: '4rd menu item',
      key: '4',
      danger: true,
      disabled: true,
    },
  ];
  const menuProps = {
    items,
    onClick: handleMenuClick,
  };
  return (
    <div className="mt-6 flex gap-2">
      <Dropdown menu={menuProps} trigger={['click']}>
        <Button size="large">
          Category
          <DownOutlined />
        </Button>
        {/*  */}
      </Dropdown>
      <Dropdown menu={menuProps} trigger={['click']}>
        <Button size="large">
          Service options
          <DownOutlined />
        </Button>
      </Dropdown>
      {/*  */}
      <Dropdown menu={menuProps} trigger={['click']}>
        <Button size="large">
          Seller details
          <DownOutlined />
        </Button>
      </Dropdown>
      {/*  */}
      <Dropdown menu={menuProps} trigger={['click']}>
        <Button size="large">
          Budget
          <DownOutlined />
        </Button>
      </Dropdown>
      {/*  */}
      <Dropdown menu={menuProps} trigger={['click']}>
        <Button size="large">
          Delivery time
          <DownOutlined />
        </Button>
      </Dropdown>
    </div>
  );
};

export default SortTopBar;
