import React from 'react';

const Education = ({ IsOpenEdu, setIsOpenEdu, arrEdu, setArrEdu }) => {
  return (
    <div className="education">
      {!IsOpenEdu ? (
        <div>
          <div className="flex justify-between pb-10">
            <h3>Education</h3>
            <a
              onClick={() => {
                setIsOpenEdu(true);
              }}
            >
              Add
            </a>
          </div>
        </div>
      ) : (
        <div>
          <h5 className="mb-3">Languages</h5>
          <div className="bg-[#F4F4F4] p-3 rounded flex flex-col justify-center text-[#7A7D85]">
            <select className="country">
              <option value={0} className="hidden">
                Country of College/University
              </option>
              <option value="a1">Unknown</option>
              <option value="af">Afghanistan</option>
              <option value="ax">Åland Islands</option>
              <option value="al">Albania</option>
              <option value="dz">Algeria</option>
              <option value="as">American Samoa</option>
              <option value="ad">Andorra</option>
              <option value="ao">Angola</option>
              <option value="ai">Anguilla</option>
              <option value="aq">Antarctica</option>
              <option value="ag">Antigua and Barbuda</option>
              <option value="ar">Argentina</option>
              <option value="am">Armenia</option>
              <option value="aw">Aruba</option>
              <option value="ac">Ascension Island</option>
              <option value="au">Australia</option>
              <option value="at">Austria</option>
              <option value="az">Azerbaijan</option>
              <option value="bs">Bahamas</option>
              <option value="bh">Bahrain</option>
              <option value="bd">Bangladesh</option>
              <option value="bb">Barbados</option>
              <option value="by">Belarus</option>
              <option value="be">Belgium</option>
              <option value="bz">Belize</option>
              <option value="bj">Benin</option>
              <option value="bm">Bermuda</option>
              <option value="bt">Bhutan</option>
              <option value="bo">Bolivia</option>
              <option value="ba">Bosnia and Herzegovina</option>
              <option value="bw">Botswana</option>
              <option value="bv">Bouvet Island</option>
              <option value="br">Brazil</option>
              <option value="io">British Indian Ocean Territory</option>
              <option value="vg">British Virgin Islands</option>
              <option value="bn">Brunei</option>
              <option value="bg">Bulgaria</option>
              <option value="bf">Burkina Faso</option>
              <option value="bi">Burundi</option>
              <option value="kh">Cambodia</option>
              <option value="cm">Cameroon</option>
              <option value="ca">Canada</option>
              <option value="ic">Canary Islands</option>
              <option value="cv">Cape Verde</option>
              <option value="bq">Caribbean Netherlands</option>
              <option value="ky">Cayman Islands</option>
              <option value="cf">Central African Republic</option>
              <option value="ea">Ceuta and Melilla</option>
              <option value="td">Chad</option>
              <option value="cl">Chile</option>
              <option value="cn">China</option>
              <option value="cx">Christmas Island</option>
              <option value="cp">Clipperton Island</option>
              <option value="cc">Cocos [Keeling] Islands</option>
              <option value="co">Colombia</option>
              <option value="km">Comoros</option>
              <option value="cd">Congo [DRC]</option>
              <option value="cg">Congo [Republic]</option>
              <option value="ck">Cook Islands</option>
              <option value="cr">Costa Rica</option>
              <option value="hr">Croatia</option>
              <option value="cu">Cuba</option>
              <option value="cw">Curaçao</option>
              <option value="cy">Cyprus</option>
              <option value="cz">Czech Republic</option>
              <option value="dk">Denmark</option>
              <option value="dg">Diego Garcia</option>
              <option value="dj">Djibouti</option>
              <option value="dm">Dominica</option>
              <option value="do">Dominican Republic</option>
              <option value="tl">East Timor</option>
              <option value="ec">Ecuador</option>
              <option value="eg">Egypt</option>
              <option value="sv">El Salvador</option>
              <option value="gq">Equatorial Guinea</option>
              <option value="er">Eritrea</option>
              <option value="ee">Estonia</option>
              <option value="et">Ethiopia</option>
              <option value="eu">European Union</option>
              <option value="fk">Falkland Islands [Islas Malvinas]</option>
              <option value="fo">Faroe Islands</option>
              <option value="fj">Fiji</option>
              <option value="fi">Finland</option>
              <option value="fr">France</option>
              <option value="gf">French Guiana</option>
              <option value="pf">French Polynesia</option>
              <option value="tf">French Southern Territories</option>
              <option value="ga">Gabon</option>
              <option value="gm">Gambia</option>
              <option value="ge">Georgia</option>
              <option value="de">Germany</option>
              <option value="gh">Ghana</option>
              <option value="gi">Gibraltar</option>
              <option value="gr">Greece</option>
              <option value="gl">Greenland</option>
              <option value="gd">Grenada</option>
              <option value="gp">Guadeloupe</option>
              <option value="gu">Guam</option>
              <option value="gt">Guatemala</option>
              <option value="gg">Guernsey</option>
              <option value="gn">Guinea</option>
              <option value="gw">Guinea-Bissau</option>
              <option value="gy">Guyana</option>
              <option value="ht">Haiti</option>
              <option value="hm">Heard Island and McDonald Islands</option>
              <option value="hn">Honduras</option>
              <option value="hk">Hong Kong</option>
              <option value="hu">Hungary</option>
              <option value="is">Iceland</option>
              <option value="in">India</option>
              <option value="id">Indonesia</option>
              <option value="ir">Iran</option>
              <option value="iq">Iraq</option>
              <option value="ie">Ireland</option>
              <option value="im">Isle of Man</option>
              <option value="il">Israel</option>
              <option value="it">Italy</option>
              <option value="ci">Ivory Coast</option>
              <option value="jm">Jamaica</option>
              <option value="jp">Japan</option>
              <option value="je">Jersey</option>
              <option value="jo">Jordan</option>
              <option value="kz">Kazakhstan</option>
              <option value="ke">Kenya</option>
              <option value="ki">Kiribati</option>
              <option value="xk">Kosovo</option>
              <option value="kw">Kuwait</option>
              <option value="kg">Kyrgyzstan</option>
              <option value="la">Laos</option>
              <option value="lv">Latvia</option>
              <option value="lb">Lebanon</option>
              <option value="ls">Lesotho</option>
              <option value="lr">Liberia</option>
              <option value="ly">Libya</option>
              <option value="li">Liechtenstein</option>
              <option value="lt">Lithuania</option>
              <option value="lu">Luxembourg</option>
              <option value="mo">Macau</option>
              <option value="mk">Macedonia [FYROM]</option>
              <option value="mg">Madagascar</option>
              <option value="mw">Malawi</option>
              <option value="my">Malaysia</option>
              <option value="mv">Maldives</option>
              <option value="ml">Mali</option>
              <option value="mt">Malta</option>
              <option value="mh">Marshall Islands</option>
              <option value="mq">Martinique</option>
              <option value="mr">Mauritania</option>
              <option value="mu">Mauritius</option>
              <option value="yt">Mayotte</option>
              <option value="mx">Mexico</option>
              <option value="fm">Micronesia</option>
              <option value="md">Moldova</option>
              <option value="mc">Monaco</option>
              <option value="mn">Mongolia</option>
              <option value="me">Montenegro</option>
              <option value="ms">Montserrat</option>
              <option value="ma">Morocco</option>
              <option value="mz">Mozambique</option>
              <option value="mm">Myanmar [Burma]</option>
              <option value="na">Namibia</option>
              <option value="nr">Nauru</option>
              <option value="np">Nepal</option>
              <option value="an">Netherlands Antilles</option>
              <option value="nl">Netherlands</option>
              <option value="nc">New Caledonia</option>
              <option value="nz">New Zealand</option>
              <option value="ni">Nicaragua</option>
              <option value="ne">Niger</option>
              <option value="ng">Nigeria</option>
              <option value="nu">Niue</option>
              <option value="nf">Norfolk Island</option>
              <option value="kp">North Korea</option>
              <option value="mp">Northern Mariana Islands</option>
              <option value="no">Norway</option>
              <option value="om">Oman</option>
              <option value="qo">Outlying Oceania</option>
              <option value="pk">Pakistan</option>
              <option value="pw">Palau</option>
              <option value="ps">Palestinian Territories</option>
              <option value="pa">Panama</option>
              <option value="pg">Papua New Guinea</option>
              <option value="py">Paraguay</option>
              <option value="pe">Peru</option>
              <option value="ph">Philippines</option>
              <option value="pn">Pitcairn Islands</option>
              <option value="pl">Poland</option>
              <option value="pt">Portugal</option>
              <option value="pr">Puerto Rico</option>
              <option value="qa">Qatar</option>
              <option value="ro">Romania</option>
              <option value="ru">Russia</option>
              <option value="rw">Rwanda</option>
              <option value="re">Réunion</option>
              <option value="bl">Saint Barthélemy</option>
              <option value="sh">Saint Helena</option>
              <option value="kn">Saint Kitts and Nevis</option>
              <option value="lc">Saint Lucia</option>
              <option value="mf">Saint Martin</option>
              <option value="pm">Saint Pierre and Miquelon</option>
              <option value="vc">Saint Vincent and the Grenadines</option>
              <option value="ws">Samoa</option>
              <option value="sm">San Marino</option>
              <option value="sa">Saudi Arabia</option>
              <option value="sn">Senegal</option>
              <option value="rs">Serbia</option>
              <option value="sc">Seychelles</option>
              <option value="sl">Sierra Leone</option>
              <option value="sg">Singapore</option>
              <option value="sx">Sint Maarten</option>
              <option value="sk">Slovakia</option>
              <option value="si">Slovenia</option>
              <option value="sb">Solomon Islands</option>
              <option value="so">Somalia</option>
              <option value="za">South Africa</option>
              <option value="gs">
                South Georgia and the South Sandwich Islands
              </option>
              <option value="kr">South Korea</option>
              <option value="ss">South Sudan</option>
              <option value="es">Spain</option>
              <option value="lk">Sri Lanka</option>
              <option value="sd">Sudan</option>
              <option value="sr">Suriname</option>
              <option value="sj">Svalbard and Jan Mayen</option>
              <option value="sz">Swaziland</option>
              <option value="se">Sweden</option>
              <option value="ch">Switzerland</option>
              <option value="sy">Syria</option>
              <option value="st">São Tomé and Príncipe</option>
              <option value="tw">Taiwan</option>
              <option value="tj">Tajikistan</option>
              <option value="tz">Tanzania</option>
              <option value="th">Thailand</option>
              <option value="tg">Togo</option>
              <option value="tk">Tokelau</option>
              <option value="to">Tonga</option>
              <option value="tt">Trinidad and Tobago</option>
              <option value="ta">Tristan da Cunha</option>
              <option value="tn">Tunisia</option>
              <option value="tr">Turkey</option>
              <option value="tm">Turkmenistan</option>
              <option value="tc">Turks and Caicos Islands</option>
              <option value="tv">Tuvalu</option>
              <option value="um">U.S. Outlying Islands</option>
              <option value="vi">U.S. Virgin Islands</option>
              <option value="ug">Uganda</option>
              <option value="ua">Ukraine</option>
              <option value="ae">United Arab Emirates</option>
              <option value="gb">United Kingdom</option>
              <option value="us">United States</option>
              <option value="uy">Uruguay</option>
              <option value="uz">Uzbekistan</option>
              <option value="vu">Vanuatu</option>
              <option value="va">Vatican City</option>
              <option value="ve">Venezuela</option>
              <option value="vn">Vietnam</option>
              <option value="wf">Wallis and Futuna</option>
              <option value="eh">Western Sahara</option>
              <option value="ye">Yemen</option>
              <option value="zm">Zambia</option>
              <option value="zw">Zimbabwe</option>
              <option value="zz">Unknown Region</option>
              <option value="__">Unknown</option>
            </select>
            <input className='mt-3' type="text" placeholder="College/University Name" />
            <div className="mt-3 flex">
              <select className="degree-title">
                <option value={0} className="hidden">
                  Title
                </option>
                <option value="associate">Associate</option>
                <option value="certificate">Certificate</option>
                <option value="ba">B.A.</option>
                <option value="barch">BArch</option>
                <option value="bm">BM</option>
                <option value="bfa">BFA</option>
                <option value="bsc">B.Sc.</option>
                <option value="ma">M.A.</option>
                <option value="mba">M.B.A.</option>
                <option value="mfa">MFA</option>
                <option value="msc">M.Sc.</option>
                <option value="jd">J.D.</option>
                <option value="md">M.D.</option>
                <option value="phd">Ph.D</option>
                <option value="llb">LLB</option>
                <option value="llm">LLM</option>
                <option value="other">Other</option>
              </select>
              <input className='w-full' type="text" placeholder="Major" />
            </div>
            <select className="year-to mt-3">
              <option value className="hidden">
                Year of graduation
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
                  setIsOpenEdu(false);
                }}
              >
                Cancel
              </button>
              <button
                className="update rounded bg-[#3FCA89] mr-[10px] px-[50px] py-[10px]"
                onClick={() => {
                  setIsOpenEdu(false);
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

export default Education;
