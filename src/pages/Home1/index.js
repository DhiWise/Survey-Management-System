import React from "react";

import { Column, Row, Img, Text, SelectBox, Button, Input } from "components";
import { useNavigate } from "react-router-dom";
import {
  postForms,
  getSendMessagechatidtestDhiWisetextHeyaIamabotcontrolledbyBC,
  getResponses,
  putSheet1A1D5valueInputOptionUSERENTERED,
} from "service/api";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const selectOptions = [
  { value: "dropdown", label: "Dropdown" },
  { value: "multiple_choice", label: "Radio" },
  { value: "long_text", label: "TextArea" },
  { value: "phone_number", label: "PhoneNumber" },
  { value: "email", label: "Email" },
  { value: "date", label: "Date" },
  { value: "rating", label: "Rating" },
  { value: "yes_no", label: "Yes/No" },
  { value: "short_text", label: "Text" },
];

const Home1Page = () => {
  const [apiData4, setapiData4] = React.useState();
  const [apiData5, setapiData5] = React.useState();
  const navigate = useNavigate();

  function callApi5(data) {
    const answers = data?.items?.map((x) => {
      return x?.answers?.map((y) => {
        return y?.type === "choice" || y?.type === "dropdown"
          ? y[y?.type]["label"]
          : y[y?.type];
      });
    });
    const req = { data: answers };
    putSheet1A1D5valueInputOptionUSERENTERED(req)
      .then((res) => {
        setapiData5(res);

        toast.success("Synced Succesfully!");
      })
      .catch((err) => {
        console.error(err);
        toast.error("Error  Syncing!");
      });
  }
  function handleNavigate2() {
    navigate("/login");
  }
  function handleNavigate3() {
    navigate("/groups");
  }
  function callApi4() {
    const id = localStorage.getItem("id");
    const req = { id: id };
    getResponses(req)
      .then((res) => {
        setapiData4(res);
        callApi5(res);
      })
      .catch((err) => {
        console.error(err);
      });
  }
  const [responseLink, setResponseLink] = React.useState(); // for saving the response link
  // form datas
  const [state, setState] = React.useState({
    choice: "",
    question: "",
    field: "",
  });
  //to save Form data in one array
  const [formData, settempVar] = React.useState([]);

  // to reset the form datas
  const handleReset = () => {
    setState({
      choice: "",
      question: "",
      field: "",
    });
  };

  // to save the objects into one array
  const handleSave = (e) => {
    formData.push(e);
    handleReset();
  };

  // to call typeform api
  function callApi(data) {
    const req = { data: [...data] };
    postForms(req)
      .then((res) => {
        localStorage.setItem("id", res?.id);
        setResponseLink(res?._links.display);
      })
      .catch((err) => {
        console.error(err);
      });
  }

  function callApiInt(data) {
    const req = { data: [...data] };
    postForms(req)
      .then((res) => {
        setResponseLink(res?._links.display);
        const msg = { data: res?._links.display };
        getSendMessagechatidtestDhiWisetextHeyaIamabotcontrolledbyBC(msg);
      })
      .catch((err) => {
        console.error(err);
      });
  }

  // to set question type
  const handleoptions = (e) => {
    setState({ ...state, field: e });
  };

  // to save the form data to state
  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  return (
    <>
      <Column
        className="bg-white_A700 font-inter mx-[auto] w-[100%]"
        compid="2:20"
        comptype="Column"
      >
        <Row
          className="items-start justify-start w-[100%]"
          compid="23"
          comptype="Row"
        >
          <aside className="bg-gray_900 items-start justify-start lg:pb-[415px] xl:pb-[475px] 2xl:pb-[534px] 3xl:pb-[641px] pb-[712px] lg:pt-[33px] xl:pt-[38px] 2xl:pt-[43px] 3xl:pt-[52px] pt-[58px] w-[15%]">
            <Column compid="1" comptype="Column">
              <Img
                src={"images/img_map.svg"}
                className="lg:h-[19px] xl:h-[22px] 2xl:h-[25px] 3xl:h-[29px] h-[32px] lg:ml-[17px] xl:ml-[20px] 2xl:ml-[22px] 3xl:ml-[27px] ml-[30px] object-contain lg:w-[18px] xl:w-[21px] 2xl:w-[24px] 3xl:w-[28px] w-[32px]"
                compid="2:37"
                comptype="Image"
                alt="map"
              />
              <Text
                className="bg-gray_902 font-normal leading-[normal] lg:mt-[50px] xl:mt-[58px] 2xl:mt-[65px] 3xl:mt-[78px] mt-[87px] not-italic xl:pb-[11px] 3xl:pb-[15px] pb-[17px] lg:pl-[17px] xl:pl-[20px] 2xl:pl-[22px] 3xl:pl-[27px] pl-[30px] xl:pt-[10px] 3xl:pt-[14px] pt-[16px] 2xl:py-[12px] lg:py-[9px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] text-[16px] lg:text-[9px] text-left text-white_A700 w-[100%]"
                compid="3:41"
                as="h5"
                variant="h5"
                comptype="Text"
              >{`Create form`}</Text>
              <Text
                onClick={handleNavigate3}
                className="font-normal lg:ml-[17px] xl:ml-[20px] 2xl:ml-[22px] 3xl:ml-[27px] ml-[30px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] not-italic xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] text-[16px] lg:text-[9px] text-left text-white_A700 w-[auto]"
                compid="3:44"
                as="h5"
                variant="h5"
                comptype="Text"
              >{`View my group`}</Text>

              <Text
                onClick={handleNavigate2}
                className="font-normal lg:ml-[17px] xl:ml-[20px] 2xl:ml-[22px] 3xl:ml-[27px] ml-[30px] lg:mt-[19px] xl:mt-[22px] 2xl:mt-[24px] 3xl:mt-[29px] mt-[33px] not-italic xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] text-[16px] lg:text-[9px] text-left text-white_A700 w-[auto]"
                compid="3:50"
                as="h5"
                variant="h5"
                comptype="Text"
              >{`Log out`}</Text>
            </Column>
          </aside>
          <Text
            className="font-normal lg:mb-[377px] xl:mb-[431px] 2xl:mb-[485px] 3xl:mb-[582px] mb-[647px] lg:ml-[219px] xl:ml-[250px] 2xl:ml-[282px] 3xl:ml-[338px] ml-[376px] lg:mt-[245px] xl:mt-[269px] 2xl:mt-[315px] 3xl:mt-[363px] mt-[404px] opacity-op7 lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-black_900 text-left w-[auto]"
            compid="5:74"
            as="h4"
            variant="h4"
            comptype="Text"
          >{`Q.`}</Text>
          <Column
            className="items-start justify-start lg:mb-[42px] xl:mb-[48px] 2xl:mb-[54px] 3xl:mb-[65px] mb-[73px] xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] ml-[16px] lg:ml-[9px] lg:mt-[137px] xl:mt-[156px] 2xl:mt-[176px] 3xl:mt-[211px] mt-[235px] w-[50%]"
            compid="27"
            comptype="Column"
          >
            <Text
              className="font-bold lg:text-[21px] xl:text-[24px] 2xl:text-[27px] 3xl:text-[32px] text-[36px] text-black_900 text-left w-[auto]"
              compid="2:30"
              as="h1"
              variant="h1"
              comptype="Text"
            >{`Type in`}</Text>
            <Column className="3xl:mt-[115px] mt-[128px] lg:mt-[74px] xl:mt-[85px] 2xl:mt-[96px] w-[100%]">
              <Row
                className="items-center justify-between pr-[1px] w-[100%]"
                compid="24"
                comptype="Row"
              >
                <Input
                  className="placeholder:bg-transparent bg-transparent border-0 border-b-[1px] border-black_900 border-solid font-medium lg:pb-[10px] xl:pb-[11px] 2xl:pb-[13px] 3xl:pb-[15px] pb-[17.38px] xl:pl-[2px] lg:pl-[2px] 3xl:pl-[3px] 2xl:pl-[3px] pl-[4px] lg:pr-[32px] xl:pr-[37px] 2xl:pr-[42px] 3xl:pr-[50px] pr-[56px] pt-[1px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] text-[16px] lg:text-[9px] placeholder:text-black_900 text-black_900 text-left w-[50%]"
                  name="question"
                  type="text"
                  onChange={handleChange}
                  value={state.question}
                  placeholder={"Please enter your questions here ...."}
                  required
                ></Input>
                <div
                  className="2xl:ml-[12px] 3xl:ml-[14px] bg-transparent lg:ml-[9px] ml-[16px] mt-2 w-[50%] xl:ml-[10px] input-wrap"
                  compid="5:72"
                  comptype="Column"
                >
                  <SelectBox
                    className="bg-transparent border-b-[1px]s border-black_900 border-solid font-medium  text-black_900 text-left w-[100%]"
                    compid="5:71"
                    comptype="Dropdown"
                    placeholderClassName="bg-transparent text-black_900"
                    options={selectOptions}
                    onChange={(e) => handleoptions(e)}
                    name="GroupEleven"
                    placeholder={`Select type of question`}
                    isSearchable={false}
                    required
                  ></SelectBox>
                </div>
              </Row>
            </Column>
            <div className="2xl:mt-[52px] 3xl:mt-[63px] bg-transparent border-0 lg:mt-[40px] mt-[70px] w-[100%] xl:mt-[46px] input-wrap">
              {(state.field === "multiple_choice" ||
                state.field === "dropdown") && (
                <div>
                  <label>Please Enter the options here</label>
                  <input
                    className="ml-5"
                    type="text"
                    onChange={handleChange}
                    value={state.choice}
                    name="choice"
                    required
                  />
                </div>
              )}
            </div>
            <Column className="mt-10 w-[100%]">
              <Row
                className="items-center justify-end w-[70%]"
                compid="5:84"
                comptype="Row"
              >
                <Button
                  onClick={() => handleSave(state)}
                  className="bg-gray_900 font-normal xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] ml-[16px] lg:ml-[9px] not-italic lg:py-[10px] xl:py-[11px] 2xl:py-[13px] 3xl:py-[15px] py-[17.38px] rounded-radius6 xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] text-[16px] lg:text-[9px] text-center text-white_A700 w-[50%]"
                  compid="5:82"
                  comptype="Button"
                >{`Save`}</Button>
                <Button
                  onClick={() => callApi(formData)}
                  className="bg-gray_900 font-normal xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] ml-[16px] lg:ml-[9px] not-italic lg:py-[10px] xl:py-[11px] 2xl:py-[13px] 3xl:py-[15px] py-[17.38px] rounded-radius6 xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] text-[16px] lg:text-[9px] text-center text-white_A700 w-[50%]"
                  compid="5:80"
                  comptype="Button"
                >{`Finish`}</Button>
                <Button
                  onClick={() => callApiInt(formData)}
                  className="bg-gray_900 font-normal xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] ml-[16px] lg:ml-[9px] not-italic lg:py-[10px] xl:py-[11px] 2xl:py-[13px] 3xl:py-[15px] py-[17.38px] rounded-radius6 xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] text-[16px] lg:text-[9px] text-center text-white_A700 w-[70%]"
                  compid="5:79"
                  comptype="Button"
                  variant="FillGray900"
                >{`Finish & Send`}</Button>
                <Button
                  onClick={() => handleReset()}
                  className="bg-gray_900 font-normal xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] ml-[16px] lg:ml-[9px] not-italic lg:py-[10px] xl:py-[11px] 2xl:py-[13px] 3xl:py-[15px] py-[17.38px] rounded-radius6 xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] text-[16px] lg:text-[9px] text-center text-white_A700 w-[70%]"
                >{`Reset questions`}</Button>
                <Button
                  className="bg-gray_900 font-normal xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] ml-[16px] lg:ml-[9px] not-italic lg:py-[10px] xl:py-[11px] 2xl:py-[13px] 3xl:py-[15px] py-[17.38px] rounded-radius6 xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] text-[16px] lg:text-[9px] text-center text-white_A700 w-[70%]"
                  // WrapClassName="2xl:ml-[773px] 3xl:ml-[927px] bg-gray_900 lg:ml-[600px] ml-[1030px] rounded-radius6 w-[7%] xl:ml-[687px]"
                  onClick={() => {
                    callApi4();
                  }}
                  name="Sync Response"
                  placeholder="Sync Response"
                >
                  Sync Response
                </Button>
              </Row>
            </Column>
            {responseLink && (
              <div className="mt-5">
                <label>Please Find your form link below</label>
                <input
                  type="text"
                  className="mt-2 w-[100%]"
                  compid="5:88"
                  as="h5"
                  variant="h5"
                  comptype="Text"
                  value={responseLink}
                  disabled
                />
              </div>
            )}
          </Column>
        </Row>
        <Text>
        Made with ❤️ using Dhiwise
          </Text>
      </Column>
      <ToastContainer />
    </>
  );
};

export default Home1Page;
