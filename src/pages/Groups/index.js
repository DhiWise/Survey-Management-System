import React from "react";

import { Column, Row, Img, Text, Line, Button, List, Stack } from "components";
import { useNavigate } from "react-router-dom";
import {
  getSendMessagechatidtestDhiWisetextHeyaIamabotcontrolledbyBC,
  getGetChatchatidtestDhiWise,
  getGetChatMembersCountchatidtestDhiWise,
  getGetChatAdministratorschatidtestDhiWise,
} from "service/api";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const GroupsPage = () => {
  const [apiData, setapiData] = React.useState();
  const [apiData1, setapiData1] = React.useState();
  const [apiData2, setapiData2] = React.useState();

  React.useEffect(() => {
    callGroupApi();
    callGroupCount();
    callGroupAdmin();
  }, []);

  const navigate = useNavigate();
  const [state, setState] = React.useState({
    msg: "",
  });

  function callGroupApi() {
    const req = {};
    getGetChatchatidtestDhiWise(req)
      .then((res) => {
        setapiData1(res);
      })
      .catch((err) => {
        console.error(err);
      });
  }
  function callGroupCount() {
    const req = {};
    getGetChatMembersCountchatidtestDhiWise(req)
      .then((res) => {
        setapiData2(res);
      })
      .catch((err) => {
        console.error(err);
      });
  }

  function callGroupAdmin() {
    const req = {};
    getGetChatAdministratorschatidtestDhiWise(req)
      .then((res) => {
        setapiData(res);
      })
      .catch((err) => {
        console.error(err);
      });
  }
  function callApi() {
    const req = { data: state.msg };

    getSendMessagechatidtestDhiWisetextHeyaIamabotcontrolledbyBC(req)
      .then((res) => {
        setapiData(res);

        toast.success("Message Sent");
      })
      .catch((err) => {
        console.error(err);
        toast.error("Error sending message!");
      });
  }

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  function handleNavigate() {
    navigate("/login");
  }
  function handleNavigate1() {
    navigate("/home1");
  }

  return (
    <>
      <Column
        className="bg-white_A700 font-inter items-center justify-start mx-[auto] w-[100%]"
        compid="5:91"
        comptype="Column"
      >
        <Row
          className="items-start justify-between lg:pr-[315px] xl:pr-[360px] 2xl:pr-[405px] 3xl:pr-[486px] pr-[540px] w-[100%]"
          compid="44"
          comptype="Row"
        >
          <aside className="bg-gray_900 items-start justify-start lg:pb-[415px] xl:pb-[475px] 2xl:pb-[534px] 3xl:pb-[641px] pb-[712px] lg:pt-[33px] xl:pt-[38px] 2xl:pt-[43px] 3xl:pt-[52px] pt-[58px] w-[15%]">
            <Column compid="45" comptype="Column">
              <Img
                src={"images/img_map.svg"}
                className="lg:h-[19px] xl:h-[22px] 2xl:h-[25px] 3xl:h-[29px] h-[32px] lg:ml-[17px] xl:ml-[20px] 2xl:ml-[22px] 3xl:ml-[27px] ml-[30px] object-contain lg:w-[18px] xl:w-[21px] 2xl:w-[24px] 3xl:w-[28px] w-[32px]"
                compid="5:94"
                comptype="Image"
                alt="map"
              />
              <Text
                compid="5:99"
                as="h5"
                variant="h5"
                comptype="Text"
                onClick={handleNavigate1}
                className="bg-gray_902 font-normal leading-[normal] lg:mt-[50px] xl:mt-[58px] 2xl:mt-[65px] 3xl:mt-[78px] mt-[87px] not-italic xl:pb-[11px] 3xl:pb-[15px] pb-[17px] lg:pl-[17px] xl:pl-[20px] 2xl:pl-[22px] 3xl:pl-[27px] pl-[30px] xl:pt-[10px] 3xl:pt-[14px] pt-[16px] 2xl:py-[12px] lg:py-[9px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] text-[16px] lg:text-[9px] text-left text-white_A700 w-[100%]"
              >{`Create form`}</Text>
              <Text className="font-normal lg:ml-[17px] xl:ml-[20px] 2xl:ml-[22px] 3xl:ml-[27px] ml-[30px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] not-italic xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] text-[16px] lg:text-[9px] text-left text-white_A700 w-[auto]">{`View my group`}</Text>

              <Text
                compid="5:108"
                as="h5"
                variant="h5"
                comptype="Text"
                onClick={handleNavigate}
                className="font-normal lg:ml-[17px] xl:ml-[20px] 2xl:ml-[22px] 3xl:ml-[27px] ml-[30px] lg:mt-[19px] xl:mt-[22px] 2xl:mt-[24px] 3xl:mt-[29px] mt-[33px] not-italic xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] text-[16px] lg:text-[9px] text-left text-white_A700 w-[auto]"
              >{`Log out`}</Text>
            </Column>
          </aside>
          <Column
            className="items-start justify-start lg:mb-[243px] xl:mb-[278px] 2xl:mb-[312px] 3xl:mb-[375px] mb-[417px] lg:ml-[319px] xl:ml-[364px] 2xl:ml-[410px] 3xl:ml-[492px] ml-[547px] lg:mt-[133px] xl:mt-[152px] 2xl:mt-[171px] 3xl:mt-[205px] mt-[228px] w-[37%]"
            compid="43"
            comptype="Column"
          >
            <Text
              className="font-bold 3xl:ml-[102px] ml-[114px] lg:ml-[66px] xl:ml-[76px] 2xl:ml-[85px] lg:text-[21px] xl:text-[24px] 2xl:text-[27px] 3xl:text-[32px] text-[36px] text-black_900 w-[auto]"
              compid="5:95"
              as="h1"
              variant="h1"
              comptype="Text"
            >
              Group Info
            </Text>
            <Column className="font-gilroy items-center xl:mt-[11px] 2xl:mt-[12px] 3xl:mt-[15px] mt-[17px] lg:mt-[9px] w-[100%]">
              <Column className="bg-white_A700 border border-bluegray_200 border-solid items-start justify-start lg:pb-[15px] xl:pb-[18px] 2xl:pb-[20px] 3xl:pb-[24px] pb-[27px] pt-[10px] lg:pt-[5px] xl:pt-[6px] 2xl:pt-[7px] 3xl:pt-[9px] rounded-radius23 w-[100%]">
                <Text className="font-bold lg:leading-[19px] xl:leading-[22px] 2xl:leading-[24px] 3xl:leading-[29px] leading-[33.00px] lg:ml-[15px] xl:ml-[18px] 2xl:ml-[20px] 3xl:ml-[24px] ml-[27px] lg:text-[11px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] text-[20px] text-gray_902 text-left w-[66%]">
                  {apiData1?.result?.title}
                </Text>
                <Text className="font-normal lg:leading-[15px] xl:leading-[17px] 2xl:leading-[19px] 3xl:leading-[23px] leading-[26.00px] lg:ml-[15px] xl:ml-[18px] 2xl:ml-[20px] 3xl:ml-[24px] ml-[27px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] not-italic xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] text-[16px] lg:text-[9px] text-gray_902 text-left w-[66%]">
                  <b> Invite Link: </b>{" "}
                  <a href="apiData1?.result?.invite_link">
                    {apiData1?.result?.invite_link}
                  </a>
                </Text>

                <Text className="font-normal lg:leading-[15px] xl:leading-[17px] 2xl:leading-[19px] 3xl:leading-[23px] leading-[26.00px] lg:ml-[15px] xl:ml-[18px] 2xl:ml-[20px] 3xl:ml-[24px] ml-[27px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] not-italic xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] text-[16px] lg:text-[9px] text-gray_902 text-left w-[66%]">
                  <b>Group Description: </b> {apiData1?.result?.description}
                </Text>
                <Text className="font-normal lg:leading-[15px] xl:leading-[17px] 2xl:leading-[19px] 3xl:leading-[23px] leading-[26.00px] lg:ml-[15px] xl:ml-[18px] 2xl:ml-[20px] 3xl:ml-[24px] ml-[27px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] not-italic xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] text-[16px] lg:text-[9px] text-gray_902 text-left w-[66%]">
                  <b>Total Group Members: </b> {apiData2?.result}
                </Text>
                <Row className="items-center justify-start lg:ml-[18px] xl:ml-[20px] 2xl:ml-[23px] 3xl:ml-[27px] ml-[31px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] lg:pr-[144px] xl:pr-[165px] 2xl:pr-[186px] 3xl:pr-[223px] pr-[248px] w-[80%]">
                  <List orientation="vertical">
                    <b>Admins:</b>
                    {apiData?.result?.map((apiDataEle) => {
                      return (
                        <Text className="font-medium lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] ml-[8px] xl:my-[11px] 2xl:my-[12px] 3xl:my-[15px] my-[17px] lg:my-[9px] 2xl:text-[10px] 3xl:text-[12px] text-[14px] lg:text-[8px] xl:text-[9px] text-bluegray_700 w-[auto]">
                          {apiDataEle?.user?.first_name}
                        </Text>
                      );
                    })}
                  </List>
                </Row>
                <Column className="font-inter items-end xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] lg:pl-[18px] xl:pl-[20px] 2xl:pl-[23px] 3xl:pl-[27px] pl-[31px] pr-[10px] lg:pr-[5px] xl:pr-[6px] 2xl:pr-[7px] 3xl:pr-[9px] w-[100%]">
                  <Stack className="lg:h-[30px] xl:h-[35px] 2xl:h-[39px] 3xl:h-[46px] h-[51px] w-[100%]">
                    <Row className="items-end justify-between w-[100%]">
                      <input
                        className="bg-transparent border-0 border-b-[1px] border-black_900 border-solid font-medium lg:pb-[10px] xl:pb-[11px] 2xl:pb-[13px] 3xl:pb-[15px] pb-[17.38px] xl:pl-[2px] lg:pl-[2px] 3xl:pl-[3px] 2xl:pl-[3px] pl-[4px] pt-[1px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] text-[16px] lg:text-[9px] placeholder:text-black_900 text-black_900 w-[100%]"
                        WrapClassName="2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[9px] mt-[16px] w-[79%] xl:mt-[10px]"
                        name="msg"
                        placeholder="Your message..."
                        onChange={handleChange}
                        value={state.msg}
                      ></input>
                      <Button
                        className="common-pointer bg-gray_900 font-normal xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] ml-[16px] lg:ml-[9px] not-italic lg:py-[10px] xl:py-[11px] 2xl:py-[13px] 3xl:py-[15px] py-[17.38px] rounded-radius6 xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] text-[16px] lg:text-[9px] text-center text-white_A700 w-[18%]"
                        compid="8:268"
                        comptype="Button"
                        onClick={() => {
                          callApi();
                        }}
                      >
                        Send
                      </Button>
                    </Row>
                  </Stack>
                </Column>
              </Column>
            </Column>
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

export default GroupsPage;
