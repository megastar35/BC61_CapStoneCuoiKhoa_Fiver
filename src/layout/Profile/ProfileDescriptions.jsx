import React, { useState } from 'react';
import './ProfileCSS/description.css';
import 'flowbite';
import { AutoComplete } from 'antd';
import Descriptiton from './ComponentDescription/Descriptiton';
import Languages from './ComponentDescription/Languages';
import Skills from './ComponentDescription/Skills';
import Education from './ComponentDescription/Education';
import Certification from './ComponentDescription/Certification';
import { useSelector } from 'react-redux';
const ProfileDescriptions = () => {
  const {user}=useSelector(state=>state.userSlice);
  const [OpenModelDes, IsOpenModelDes] = useState(false);
  const [description, setDescription] = useState('');
  const [isAddLanguages, setIsLanguages] = useState(false);
  const [addLanguages, setAddLanguages] = useState([]);
  const [isOpenSkill, setIsOpenSkill] = useState(false);
  const [newSkill, setNewSkill] = useState(user.user.skill);
  const [IsOpenEdu, setIsOpenEdu] = useState(false);
  const [arrEdu, setArrEdu] = useState([]);
  const [IsOpenCertification,SetIsOpenCertification]=useState(false);
  const [arrCertification,setArrCertificaiton]=useState(user.user.certification);
  return (
    <div className=" mt-10 w-full max-w-md p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8">
      <div className="flow-root">
        <ul role="list" className="divide-y divide-gray-200">
          <li className="py-3 sm:py-4">
            <Descriptiton
              setDescription={setDescription}
              description={description}
              OpenModelDes={OpenModelDes}
              IsOpenModelDes={IsOpenModelDes}
            />
          </li>
          <li className="py-3 sm:py-4">
            <Languages
              isAddLanguages={isAddLanguages}
              setIsLanguages={setIsLanguages}
              addLanguages={addLanguages}
              setAddLanguages={setAddLanguages}
            />
          </li>
          <li className="py-3 sm:py-4">
            <Skills
              isOpenSkill={isOpenSkill}
              setIsOpenSkill={setIsOpenSkill}
              newSkill={newSkill}
              setNewSkill={setNewSkill}
            />
          </li>
          <li className="py-3 sm:py-4">
            <Education
              IsOpenEdu={IsOpenEdu}
              setIsOpenEdu={setIsOpenEdu}
              arrEdu={arrEdu}
              setArrEdu={setArrEdu}
            />
          </li>
          <li className='py-3 sm:py-4'>
            <Certification 
              IsOpenCertification={IsOpenCertification} 
              SetIsOpenCertification={SetIsOpenCertification}
              arrCertification={arrCertification}
              setArrCertificaiton={setArrCertificaiton}
            />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ProfileDescriptions;
