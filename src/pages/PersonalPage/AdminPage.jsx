import React, { useState, useEffect } from 'react';
import { Table, Space, Tag } from 'antd';
import { controlUserServer } from '../../services/ControlUser';
import { useFormik } from 'formik';
import InputCustom from '../../Input/InputCustom';
import * as Yup from 'yup';

const AdminPage = () => {
  const [arrUser, setArrUser] = useState([]);
  const [inforUpdateUser,setInforUpdateUser]=useState([]);
  const [pagination, setPagination] = useState({
    current: 1,
    pageSize: 20,
  });
  const formilk = useFormik({
    initialValues: {
      email: '',
      password: '',
      name: '',
      phone: '',
    },
    onSubmit: (value,{resetForm}) => {
      console.log(value);
      controlUserServer.SignUp(value).then((res)=>{
        console.log(res)
        resetForm()
        setArrUser([...arrUser,res.data.content]);
      }).catch((err)=>{
        console.log(err)
      })
      // resetForm();
    },
    validationSchema:Yup.object({
      email: Yup.string()
        .email('Vui lòng nhập đúng email')
        .required('Vui lòng không bỏ trống'),
      password: Yup.string()
        .required('Vui lòng không bỏ trống')
        .min(5, 'Nhập tối thiểu 5 ký tự'),
      name: Yup.string().required("Vui lòng không bỏ trống").matches(/^[a-zA-Z ]+$/,'Vui lòng nhập lại tên'),
      phone: Yup.string().required("Vui lòng không bỏ trống").matches(/^(0?)(3[2-9]|5[6|8|9]|7[0|6-9]|8[0-6|8|9]|9[0-4|6-9])[0-9]{7}$/,"Vui lòng nhập lại số điện thoại")
    })
  });
  const getAllUser=()=>{
    controlUserServer.GetAllUser().then((res)=>{console.log(res);
      setArrUser(res.data.content);
    }).catch((err)=>{console.log(err)})
  }
  const columns = [
    {
      title: 'STT',
      render: (text, record, index) => {
        return index + 1+ pagination.current * pagination.pageSize - pagination.pageSize;
      },
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: text => <a>{text}</a>,
    },
    {
      title: 'email',
      dataIndex: 'email',
      key: 'email',
    },
    // {
    //   title: 'password',
    //   dataIndex: 'password',
    //   key: 'password',
    // },
    {
      title: 'phone',
      dataIndex: 'phone',
      key: 'phone',
    },
    {
      title: 'Tag',
      render: (text, record, index) => {
        return text.role == 'ADMIN' ? (
          <Tag color="#f50">Quản trị viên</Tag>
        ) : (
          <Tag color="#108ee9">Người dùng</Tag>
        );
      },
    },
    {
      title: 'Chức năng',
      render: (text, record, index) => {
        return (
          <>
            <button onClick={()=>{formilk.setValues(record);
              setInforUpdateUser(text);
              console.log(text);
            }}  className="py-2 px-4 rounded text-white bg-yellow-600 mr-2">
              Sửa
            </button>
            <button onClick={()=>{controlUserServer.DeleteUser(text.id).then((res)=>{
              console.log(res);
              getAllUser();
            }).catch((err)=>{console.log(err)})}} className="py-2 px-4 rounded text-white bg-red-600">
              Xóa
            </button>
          </>
        );
      },
    },
  ];
  useEffect(() => {
    controlUserServer
      .GetAllUser()
      .then(res => {
        setArrUser(res.data.content);
      })
      .catch(err => {
        console.log(err);
      });
  },[]);
  console.log("list user: ",arrUser);
  return (
    <div className="py-10">
      <div className="container mx-auto">
        <h1 className="text-center text-4xl font-bold mb-4">Quản lý Người dùng</h1>
        <form onSubmit={formilk.handleSubmit}>
          <div className="grid gap-6 mb-6 md:grid-cols-2">
            <InputCustom
              label={'Your name'}
              name={'name'}
              type={'text'}
              handleChange={formilk.handleChange}
              handleBlur={formilk.handleBlur}
              placeholder={'abcxyz'}
              error={formilk.errors.name}
              touched={formilk.touched.name}
              value={formilk.values.name}
            />
            <InputCustom
              label={'Your Email'}
              name={'email'}
              type={'email'}
              handleChange={formilk.handleChange}
              handleBlur={formilk.handleBlur}
              placeholder={'name@gmail.com'}
              error={formilk.errors.email}
              touched={formilk.touched.email}
              value={formilk.values.email}
            />
            <InputCustom
              label={'Your Phone'}
              name={'phone'}
              type={'text'}
              handleChange={formilk.handleChange}
              handleBlur={formilk.handleBlur}
              placeholder={'089071800'}
              error={formilk.errors.phone}
              touched={formilk.touched.phone}
              value={formilk.values.phone}
            />
            <InputCustom
              label={'your password'}
              name={'password'}
              type={'text'}
              handleChange={formilk.handleChange}
              handleBlur={formilk.handleBlur}
              placeholder={'••••••••'}
              error={formilk.errors.password}
              touched={formilk.touched.password}
              value={formilk.values.password}
            />
          </div>
          <button
            type="submit"
            className="mr-2 text-white bg-black hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Sign up
          </button>
          <button
            onClick={()=>{
              console.log(formilk.values);
              console.log(inforUpdateUser.id);
              controlUserServer.UpdateUser(formilk.values).then((res)=>{
                console.log(res)
                getAllUser();
              }).catch((err)=>{
                console.log(err)
              })
            }}
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Update
          </button>
        </form>

        <Table
          className='mt-3'
          dataSource={arrUser}
          columns={columns}
          pagination={pagination}
          onChange={(e)=>{setPagination(e)}}
          // { defaultPageSize: 20 }
        />
      </div>
    </div>
  );
};

export default AdminPage;
