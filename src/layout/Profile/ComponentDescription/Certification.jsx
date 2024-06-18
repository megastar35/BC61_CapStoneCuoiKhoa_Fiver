import React, { useState } from 'react';
import { controlUserServer } from '../../../services/ControlUser';
const Certification = ({
  IsOpenCertification,
  SetIsOpenCertification,
  arrCertification,
  setArrCertificaiton,
}) => {
  const [certification,setCertification]=useState('');
  const [certifiedFrom,setCertifiedFrom]=useState('');
  const [year,setYear]=useState();
  const renderCertification=()=>{
    return arrCertification.map((item,index)=>{
      return <li className='mt-2' key={index}>
        <h4>{item.award}</h4>
        <h5 className='text-[#b2b2b2] text-[14px] font-[400]'>{item.certifiedFrom} {item.year}</h5>
      </li>
    })
  }
  return (
    <div className="certification">
      {!IsOpenCertification ? (
        <div>
          <div className="flex justify-between pb-10">
            <h3>Certification</h3>
            <a
              onClick={() => {
                SetIsOpenCertification(true);
              }}
            >
              Add
            </a>
          </div>
          <ul>
            {renderCertification()}
          </ul>
        </div>
      ) : (
        <div>
          <h5 className="mb-3">Certification</h5>
          <div className="bg-[#F4F4F4] p-3 rounded flex flex-col justify-center text-[#7A7D85]">
            <input type="text" className placeholder="Certificate or Award" onChange={e=>{setCertification(e.target.value)}} />
            <input
              onChange={e=>{setCertifiedFrom(e.target.value)}}
              type="text"
              className="mt-3"
              placeholder="Certified From (e.g. Adobe)"
            />
            <select className="year mt-3 p-2" onChange={e=>{ setYear(e.target.value)}}>
              <option value className="hidden">
                Year
              </option>
              <option value={2024}>2024</option>
              <option value={2023}>2023</option>
              <option value={2022}>2022</option>
              <option value={2021}>2021</option>
              <option value={2020}>2020</option>
              <option value={2019}>2019</option>
              <option value={2018}>2018</option>
              <option value={2017}>2017</option>
              <option value={2016}>2016</option>
              <option value={2015}>2015</option>
              <option value={2014}>2014</option>
              <option value={2013}>2013</option>
              <option value={2012}>2012</option>
              <option value={2011}>2011</option>
              <option value={2010}>2010</option>
              <option value={2009}>2009</option>
              <option value={2008}>2008</option>
              <option value={2007}>2007</option>
              <option value={2006}>2006</option>
              <option value={2005}>2005</option>
              <option value={2004}>2004</option>
              <option value={2003}>2003</option>
              <option value={2002}>2002</option>
              <option value={2001}>2001</option>
              <option value={2000}>2000</option>
              <option value={1999}>1999</option>
              <option value={1998}>1998</option>
              <option value={1997}>1997</option>
              <option value={1996}>1996</option>
              <option value={1995}>1995</option>
              <option value={1994}>1994</option>
              <option value={1993}>1993</option>
              <option value={1992}>1992</option>
              <option value={1991}>1991</option>
              <option value={1990}>1990</option>
              <option value={1989}>1989</option>
              <option value={1988}>1988</option>
              <option value={1987}>1987</option>
              <option value={1986}>1986</option>
              <option value={1985}>1985</option>
              <option value={1984}>1984</option>
              <option value={1983}>1983</option>
              <option value={1982}>1982</option>
              <option value={1981}>1981</option>
              <option value={1980}>1980</option>
              <option value={1979}>1979</option>
              <option value={1978}>1978</option>
              <option value={1977}>1977</option>
              <option value={1976}>1976</option>
              <option value={1975}>1975</option>
              <option value={1974}>1974</option>
              <option value={1973}>1973</option>
              <option value={1972}>1972</option>
              <option value={1971}>1971</option>
              <option value={1970}>1970</option>
              <option value={1969}>1969</option>
              <option value={1968}>1968</option>
              <option value={1967}>1967</option>
              <option value={1966}>1966</option>
              <option value={1965}>1965</option>
              <option value={1964}>1964</option>
              <option value={1963}>1963</option>
              <option value={1962}>1962</option>
              <option value={1961}>1961</option>
              <option value={1960}>1960</option>
            </select>
            <div className="mt-3 flex justify-center">
              <button
                className="cancel rounded mr-[10px] px-[50px] py-[10px] border-[1px]"
                onClick={() => {
                  SetIsOpenCertification(false);
                }}
              >
                Cancel
              </button>
              <button
                className="update rounded bg-[#3FCA89] mr-[10px] px-[50px] py-[10px]"
                onClick={() => {
                  const certificationUser={'award':certification,'certifiedFrom':certifiedFrom,'year':year};
                  setArrCertificaiton([...arrCertification,certificationUser]);
                  SetIsOpenCertification(false);
                }}
              >
                Add
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Certification;
