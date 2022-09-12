import React from "react";

import { Column, Row, Img, Text, List, Line, RatingBar } from "components";

const SyncwithGooglePage = () => {
  return (
    <>
      <Column
        className="bg-white_A700 font-inter mx-[auto] w-[100%]"
        compid="8:204"
        comptype="Column"
      >
        <Row className="items-center w-[96%]" compid="34" comptype="Row">
          <aside className="w-[20%]">
            <Column className="" compid="15" comptype="Column">
              <Column
                className="bg-gray_900 lg:py-[36px] xl:py-[41px] 2xl:py-[46px] 3xl:py-[55px] w-[77%]"
                compid="2"
                comptype="Column"
              >
                <Column
                  className="lg:ml-[17px] xl:ml-[20px] 2xl:ml-[22px] 3xl:ml-[27px] w-[39%]"
                  compid="35"
                  comptype="Column"
                >
                  <Img
                    src="images/img_map.svg"
                    className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] ml-[4px] lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px]"
                    compid="8:280"
                    comptype="Image"
                    alt="map"
                  />
                  <Text
                    className="font-normal lg:mt-[61px] xl:mt-[70px] 2xl:mt-[79px] 3xl:mt-[95px] not-italic text-white_A700 w-[auto]"
                    compid="8:283"
                    as="h5"
                    variant="h5"
                    comptype="Text"
                  >
                    Create form
                  </Text>
                  <Text
                    className="font-normal lg:mt-[21px] xl:mt-[24px] 2xl:mt-[27px] 3xl:mt-[32px] not-italic text-white_A700 w-[auto]"
                    compid="8:286"
                    as="h5"
                    variant="h5"
                    comptype="Text"
                  >
                    View my group
                  </Text>
                </Column>
                <Text
                  className="bg-gray_902 font-normal xl:mt-[11px] 2xl:mt-[12px] 3xl:mt-[15px] lg:mt-[9px] not-italic xl:pb-[10px] 2xl:pb-[12px] 3xl:pb-[14px] lg:pb-[9px] lg:pl-[17px] xl:pl-[20px] 2xl:pl-[22px] 3xl:pl-[27px] lg:pt-[11px] xl:pt-[12px] 2xl:pt-[14px] 3xl:pt-[17px] text-white_A700 w-[288px]"
                  compid="8:287"
                  as="h5"
                  variant="h5"
                  comptype="Text"
                >
                  Sync response
                </Text>
                <Text
                  className="font-normal lg:mb-[378px] xl:mb-[433px] 2xl:mb-[487px] 3xl:mb-[584px] lg:ml-[17px] xl:ml-[20px] 2xl:ml-[22px] 3xl:ml-[27px] lg:mt-[11px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] not-italic text-white_A700 w-[auto]"
                  compid="8:292"
                  as="h5"
                  variant="h5"
                  comptype="Text"
                >
                  Log out
                </Text>
              </Column>
            </Column>
          </aside>
          <Column className="w-[80%]" compid="33" comptype="Column">
            <Text
              className="text-black_900 w-[auto]"
              compid="8:208"
              as="h1"
              variant="h1"
              comptype="Text"
            >
              Sync with G-Sheet
            </Text>
            <Row
              className="items-center lg:ml-[29px] xl:ml-[33px] 2xl:ml-[37px] 3xl:ml-[45px] lg:mt-[49px] xl:mt-[56px] 2xl:mt-[63px] 3xl:mt-[75px] w-[85%]"
              compid="31"
              comptype="Row"
            >
              <Text
                className="font-normal text-black_900_99 w-[auto]"
                compid="8:371"
                as="h5"
                variant="h5"
                comptype="Text"
              >
                User
              </Text>
              <Text
                className="font-normal lg:ml-[114px] xl:ml-[130px] 2xl:ml-[147px] 3xl:ml-[176px] text-black_900_99 w-[auto]"
                compid="8:372"
                as="h5"
                variant="h5"
                comptype="Text"
              >
                Feedback
              </Text>
              <Text
                className="font-normal lg:ml-[308px] xl:ml-[352px] 2xl:ml-[397px] 3xl:ml-[476px] text-black_900_99 w-[auto]"
                compid="8:373"
                as="h5"
                variant="h5"
                comptype="Text"
              >
                Date
              </Text>
              <Text
                className="font-normal lg:ml-[176px] xl:ml-[202px] 2xl:ml-[227px] 3xl:ml-[272px] text-black_900_99 w-[auto]"
                compid="8:374"
                as="h5"
                variant="h5"
                comptype="Text"
              >
                Ratings
              </Text>
            </Row>
            <List
              className="gap-[0] min-h-[auto] lg:mt-[28px] xl:mt-[32px] 2xl:mt-[36px] 3xl:mt-[43px] w-[100%]"
              compid="36"
              comptype="List"
              orientation="vertical"
            >
              <Row
                className="bg-white_A700 border border-black_900_1e border-solid items-center lg:my-[5px] xl:my-[6px] 2xl:my-[7px] 3xl:my-[9px] lg:p-[11px] xl:p-[13px] 2xl:p-[15px] 3xl:p-[18px] rounded-radius10 w-[100%]"
                compid="8:316"
                comptype="Row"
              >
                <Img
                  src="images/img_rectangle1.png"
                  className="lg:h-[24px] xl:h-[27px] 2xl:h-[31px] 3xl:h-[37px] lg:ml-[17px] xl:ml-[20px] 2xl:ml-[22px] 3xl:ml-[27px] rounded-radius50 lg:w-[23px] xl:w-[26px] 2xl:w-[30px] 3xl:w-[36px]"
                  compid="8:295"
                  comptype="CircleImage"
                  alt="RectangleTen"
                />
                <Text
                  className="font-normal lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] text-black_900_dd w-[auto]"
                  compid="8:296"
                  as="h5"
                  variant="h5"
                  comptype="Text"
                >
                  Theresa Webb
                </Text>
                <Text
                  className="font-medium lg:ml-[32px] xl:ml-[37px] 2xl:ml-[42px] 3xl:ml-[50px] text-black_900_90 w-[auto]"
                  compid="8:303"
                  as="h5"
                  variant="h5"
                  comptype="Text"
                >
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet vi...
                </Text>
                <Text
                  className="font-medium lg:ml-[32px] xl:ml-[37px] 2xl:ml-[42px] 3xl:ml-[50px] text-black_900_90 tracking-ls1 w-[auto]"
                  compid="8:315"
                  as="h5"
                  variant="h5"
                  comptype="Text"
                >
                  8/21/15
                </Text>
                <RatingBar
                  className="lg:ml-[163px] xl:ml-[186px] 2xl:ml-[210px] 3xl:ml-[252px]"
                  compid="37"
                  comptype="RatingBar"
                  value={3}
                  starCount={5}
                  color="var(--gray_300)"
                  activeColor="var(--yellow_600)"
                  size={((window.innerWidth - 15) * 24) / 1920}
                ></RatingBar>
              </Row>
              <Line
                className="self-center w-[100%] h-[1px] bg-black_900_65"
                compid="8:375"
                comptype="Line"
              />
              <Row
                className="bg-white_A700 border border-black_900_1e border-solid items-center lg:my-[5px] xl:my-[6px] 2xl:my-[7px] 3xl:my-[9px] lg:p-[11px] xl:p-[13px] 2xl:p-[15px] 3xl:p-[18px] rounded-radius10 w-[100%]"
                compid="8:320"
                comptype="Row"
              >
                <Img
                  src="images/img_rectangle10.png"
                  className="lg:h-[24px] xl:h-[27px] 2xl:h-[31px] 3xl:h-[37px] lg:ml-[17px] xl:ml-[20px] 2xl:ml-[22px] 3xl:ml-[27px] rounded-radius50 lg:w-[23px] xl:w-[26px] 2xl:w-[30px] 3xl:w-[36px]"
                  compid="8:330"
                  comptype="CircleImage"
                  alt="RectangleTen One"
                />
                <Text
                  className="font-normal lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] text-black_900_dd w-[auto]"
                  compid="8:329"
                  as="h5"
                  variant="h5"
                  comptype="Text"
                >
                  Mira George
                </Text>
                <Text
                  className="font-medium lg:ml-[43px] xl:ml-[49px] 2xl:ml-[55px] 3xl:ml-[66px] text-black_900_90 w-[auto]"
                  compid="8:328"
                  as="h5"
                  variant="h5"
                  comptype="Text"
                >
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet vi...
                </Text>
                <Text
                  className="font-medium lg:ml-[32px] xl:ml-[37px] 2xl:ml-[42px] 3xl:ml-[50px] text-black_900_90 tracking-ls1 w-[auto]"
                  compid="8:321"
                  as="h5"
                  variant="h5"
                  comptype="Text"
                >
                  8/21/15
                </Text>
                <RatingBar
                  className="lg:ml-[163px] xl:ml-[186px] 2xl:ml-[210px] 3xl:ml-[252px]"
                  compid="38"
                  comptype="RatingBar"
                  value={4}
                  starCount={5}
                  color="var(--gray_300)"
                  activeColor="var(--yellow_600)"
                  size={((window.innerWidth - 15) * 24) / 1920}
                ></RatingBar>
              </Row>
              <Line
                className="self-center w-[100%] h-[1px] bg-black_900_65"
                compid="8:375"
                comptype="Line"
              />
              <Row
                className="bg-white_A700 border border-black_900_1e border-solid items-center lg:my-[5px] xl:my-[6px] 2xl:my-[7px] 3xl:my-[9px] lg:p-[11px] xl:p-[13px] 2xl:p-[15px] 3xl:p-[18px] rounded-radius10 w-[100%]"
                compid="8:333"
                comptype="Row"
              >
                <Img
                  src="images/img_rectangle10_40X40.png"
                  className="lg:h-[24px] xl:h-[27px] 2xl:h-[31px] 3xl:h-[37px] lg:ml-[17px] xl:ml-[20px] 2xl:ml-[22px] 3xl:ml-[27px] rounded-radius50 lg:w-[23px] xl:w-[26px] 2xl:w-[30px] 3xl:w-[36px]"
                  compid="8:343"
                  comptype="CircleImage"
                  alt="RectangleTen Two"
                />
                <Text
                  className="font-normal lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] text-black_900_dd w-[auto]"
                  compid="8:342"
                  as="h5"
                  variant="h5"
                  comptype="Text"
                >
                  Marley Schleifer
                </Text>
                <Text
                  className="font-medium lg:ml-[25px] xl:ml-[28px] 2xl:ml-[32px] 3xl:ml-[38px] text-black_900_90 w-[auto]"
                  compid="8:341"
                  as="h5"
                  variant="h5"
                  comptype="Text"
                >
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet vi...
                </Text>
                <Text
                  className="font-medium lg:ml-[32px] xl:ml-[37px] 2xl:ml-[42px] 3xl:ml-[50px] text-black_900_90 tracking-ls1 w-[auto]"
                  compid="8:334"
                  as="h5"
                  variant="h5"
                  comptype="Text"
                >
                  8/21/15
                </Text>
                <RatingBar
                  className="lg:ml-[163px] xl:ml-[186px] 2xl:ml-[210px] 3xl:ml-[252px]"
                  compid="39"
                  comptype="RatingBar"
                  value={2}
                  starCount={5}
                  color="var(--gray_300)"
                  activeColor="var(--yellow_600)"
                  size={((window.innerWidth - 15) * 24) / 1920}
                ></RatingBar>
              </Row>
              <Line
                className="self-center w-[100%] h-[1px] bg-black_900_65"
                compid="8:375"
                comptype="Line"
              />
              <Row
                className="bg-white_A700 border border-black_900_1e border-solid items-center lg:my-[5px] xl:my-[6px] 2xl:my-[7px] 3xl:my-[9px] lg:p-[11px] xl:p-[13px] 2xl:p-[15px] 3xl:p-[18px] rounded-radius10 w-[100%]"
                compid="8:346"
                comptype="Row"
              >
                <Img
                  src="images/img_rectangle10_1.png"
                  className="lg:h-[24px] xl:h-[27px] 2xl:h-[31px] 3xl:h-[37px] lg:ml-[17px] xl:ml-[20px] 2xl:ml-[22px] 3xl:ml-[27px] rounded-radius50 lg:w-[23px] xl:w-[26px] 2xl:w-[30px] 3xl:w-[36px]"
                  compid="8:356"
                  comptype="CircleImage"
                  alt="RectangleTen Three"
                />
                <Text
                  className="font-normal lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] text-black_900_dd w-[auto]"
                  compid="8:355"
                  as="h5"
                  variant="h5"
                  comptype="Text"
                >
                  Kaiya Rosser
                </Text>
                <Text
                  className="font-medium lg:ml-[40px] xl:ml-[46px] 2xl:ml-[51px] 3xl:ml-[62px] text-black_900_90 w-[auto]"
                  compid="8:354"
                  as="h5"
                  variant="h5"
                  comptype="Text"
                >
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet vi...
                </Text>
                <Text
                  className="font-medium lg:ml-[32px] xl:ml-[37px] 2xl:ml-[42px] 3xl:ml-[50px] text-black_900_90 tracking-ls1 w-[auto]"
                  compid="8:347"
                  as="h5"
                  variant="h5"
                  comptype="Text"
                >
                  8/21/15
                </Text>
                <RatingBar
                  className="lg:ml-[163px] xl:ml-[186px] 2xl:ml-[210px] 3xl:ml-[252px]"
                  compid="40"
                  comptype="RatingBar"
                  value={1}
                  starCount={5}
                  color="var(--gray_300)"
                  activeColor="var(--yellow_600)"
                  size={((window.innerWidth - 15) * 24) / 1920}
                ></RatingBar>
              </Row>
              <Line
                className="self-center w-[100%] h-[1px] bg-black_900_65"
                compid="8:375"
                comptype="Line"
              />
              <Row
                className="bg-white_A700 border border-black_900_1e border-solid items-center lg:my-[5px] xl:my-[6px] 2xl:my-[7px] 3xl:my-[9px] lg:p-[11px] xl:p-[13px] 2xl:p-[15px] 3xl:p-[18px] rounded-radius10 w-[100%]"
                compid="8:359"
                comptype="Row"
              >
                <Img
                  src="images/img_rectangle10_2.png"
                  className="lg:h-[24px] xl:h-[27px] 2xl:h-[31px] 3xl:h-[37px] lg:ml-[17px] xl:ml-[20px] 2xl:ml-[22px] 3xl:ml-[27px] rounded-radius50 lg:w-[23px] xl:w-[26px] 2xl:w-[30px] 3xl:w-[36px]"
                  compid="8:369"
                  comptype="CircleImage"
                  alt="RectangleTen Four"
                />
                <Text
                  className="font-normal lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] text-black_900_dd w-[auto]"
                  compid="8:368"
                  as="h5"
                  variant="h5"
                  comptype="Text"
                >
                  Carla Rhiel Madsen
                </Text>
                <Text
                  className="font-medium lg:ml-[11px] xl:ml-[13px] 2xl:ml-[15px] 3xl:ml-[18px] text-black_900_90 w-[auto]"
                  compid="8:367"
                  as="h5"
                  variant="h5"
                  comptype="Text"
                >
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet vi...
                </Text>
                <Text
                  className="font-medium lg:ml-[32px] xl:ml-[37px] 2xl:ml-[42px] 3xl:ml-[50px] text-black_900_90 tracking-ls1 w-[auto]"
                  compid="8:360"
                  as="h5"
                  variant="h5"
                  comptype="Text"
                >
                  8/21/15
                </Text>
                <RatingBar
                  className="lg:ml-[163px] xl:ml-[186px] 2xl:ml-[210px] 3xl:ml-[252px]"
                  compid="41"
                  comptype="RatingBar"
                  value={3}
                  starCount={5}
                  color="var(--gray_300)"
                  activeColor="var(--yellow_600)"
                  size={((window.innerWidth - 15) * 24) / 1920}
                ></RatingBar>
              </Row>
            </List>
          </Column>
        </Row>
      </Column>
    </>
  );
};

export default SyncwithGooglePage;
