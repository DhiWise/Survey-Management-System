import React from "react";

import { useGoogleLogin } from "@react-oauth/google";
import { Column, Row, Text, Stack, Img } from "components";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();

  function handleNavigate1() {
    navigate("/home1");
  }
  const googleSignIn = useGoogleLogin({
    onSuccess: (res) => {
      alert("Login successfull. 😍");

      handleNavigate1();
    },
    onFailure: (err) => {
      alert(err?.details ?? "Failed to login. 😢");
    },
  });

  return (
    <>
      <Column
        className="bg-white_A700 font-inter mx-[auto] w-[100%]"
        compid="1:2"
        comptype="Column"
      >
        <Row className="w-[71%]" compid="50" comptype="Row">
          <aside className="w-[81%]">
            <Column className="" compid="21" comptype="Column">
              <Column
                className="bg-gray_900 justify-end xl:p-[4px] lg:p-[4px] 2xl:p-[5px] 3xl:p-[6px] w-[50%]"
                compid="4"
                comptype="Column"
              >
                <Column
                  className="lg:ml-[44px] xl:ml-[50px] 2xl:ml-[57px] 3xl:ml-[68px] 3xl:mr-[114px] lg:mr-[74px] xl:mr-[84px] 2xl:mr-[95px] lg:mt-[196px] xl:mt-[224px] 2xl:mt-[252px] 3xl:mt-[303px] w-[62%]"
                  compid="51"
                  comptype="Column"
                >
                  <Text
                    className="font-normal leading-[138.00%] text-white_A700 w-[100%]"
                    compid="2:12"
                    as="h2"
                    variant="h2"
                    comptype="Text"
                  >
                    Manage your surveys
                    <br />
                    with brilliant system
                  </Text>
                  <Text
                    className="font-normal leading-[normal] xl:mt-[10px] 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[8px] not-italic text-white_A700_87 w-[93%]"
                    compid="2:14"
                    as="h5"
                    variant="h5"
                    comptype="Text"
                  >
                      Create a typeform instantly and share it to your telegram group on the click of a button.
                    Send messages to your Telegram group just on the click of a button.
                    Sync your Telegram Response with GoogleSheets just on the click of a button.
                    </Text>
                </Column>
                <Stack
                  className="lg:h-[169px] xl:h-[193px] 2xl:h-[217px] 3xl:h-[261px] lg:ml-[30px] xl:ml-[34px] 2xl:ml-[39px] 3xl:ml-[46px] lg:mr-[126px] xl:mr-[144px] 2xl:mr-[162px] 3xl:mr-[195px] lg:mt-[140px] xl:mt-[160px] 2xl:mt-[180px] 3xl:mt-[217px] w-[50%]"
                  compid="48"
                  comptype="Stack"
                >
                  <div
                    className="absolute bg-gray_901 lg:h-[142px] xl:h-[163px] 2xl:h-[183px] 3xl:h-[219px] right-[0] rounded-radius50 top-[0] lg:w-[141px] xl:w-[162px] 2xl:w-[182px] 3xl:w-[218px]"
                    compid="2:16"
                    comptype="View"
                  ></div>
                  <div
                    className="absolute bg-gray_900_90 bottom-[0] lg:h-[37px] xl:h-[43px] 2xl:h-[48px] 3xl:h-[57px] left-[0] rounded-radius50 lg:w-[36px] xl:w-[42px] 2xl:w-[47px] 3xl:w-[56px]"
                    compid="2:17"
                    comptype="View"
                  ></div>
                </Stack>
                <div
                  className="bg-gray_900_75 lg:h-[20px] xl:h-[23px] 2xl:h-[25px] 3xl:h-[30px] lg:ml-[11px] xl:ml-[12px] 2xl:ml-[14px] 3xl:ml-[17px] lg:mr-[282px] xl:mr-[322px] 2xl:mr-[363px] 3xl:mr-[435px] rounded-radius50 lg:w-[19px] xl:w-[22px] 2xl:w-[24px] 3xl:w-[29px]"
                  compid="2:18"
                  comptype="View"
                ></div>
              </Column>
            </Column>
          </aside>
          <Column
            className="lg:mt-[159px] xl:mt-[182px] 2xl:mt-[205px] 3xl:mt-[246px] w-[19%]"
            compid="49"
            comptype="Column"
          >
            <Text
              className="font-bold text-black_900_a0 w-[auto]"
              compid="2:11"
              as="h2"
              variant="h2"
              comptype="Text"
            >
              Sign in
            </Text>
            <Column
              className="common-pointer bg-gray_900 justify-end lg:mt-[42px] xl:mt-[48px] 2xl:mt-[54px] 3xl:mt-[64px] lg:p-[16px] xl:p-[18px] 2xl:p-[21px] 3xl:p-[25px] rounded-radius10 w-[100%]"
              compid="3:38"
              comptype="Column"
              onClick={googleSignIn}
            >
              <Img
                src="images/img_google31.png"
                className="lg:h-[34px] xl:h-[39px] 2xl:h-[44px] 3xl:h-[53px] ml-[2px] mt-[2px] lg:w-[33px] xl:w-[38px] 2xl:w-[43px] 3xl:w-[52px]"
                compid="2:7"
                comptype="Image"
                alt="googleThirtyOne"
              />
              <Text
                className="leading-[normal] ml-[2px] lg:mt-[63px] xl:mt-[72px] 2xl:mt-[81px] 3xl:mt-[98px] text-white_A700 w-[69%]"
                compid="2:8"
                as="h3"
                variant="h3"
                comptype="Text"
              >
                Sign in with <br />
                Google
              </Text>
            </Column>
          </Column>
         
        </Row>
        <Text>
        Made with ❤️ using Dhiwise
          </Text>
      </Column>
    </>
  );
};

export default LoginPage;
