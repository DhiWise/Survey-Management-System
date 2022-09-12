import { apis } from "service";

const COMMON_URL = `https://`;

const API_URLS = {
  GET_SEND_MESSAGECHATIDTEST_DHI_WISETEXT_HEYA_IAMABOTCONTROLLEDBY_B_C: `${COMMON_URL}api.telegram.org/<your-bot-id>/sendMessage`,
  POST_FORMS: `${COMMON_URL}api.typeform.com/forms`,
  GET_ADMIN: `${COMMON_URL}api.telegram.org/<your-bot-id>/getChatAdministrators?chat_id=<@your_chat_id>`,
  GET_GROUPCOUNT: `${COMMON_URL}api.telegram.org/<your-bot-id>/getChatMembersCount?chat_id=<@your_chat_id>`,
  GET_CHATINFO: `${COMMON_URL}api.telegram.org/<your-bot-id>/getChat?chat_id=<@your_chat_id>`,
  PUT_GOOGLESHEETS: `${COMMON_URL}sheets.googleapis.com/v4/spreadsheets/<your-spreadsheet-id>/values/<your-sheet-name>!A1:D5`,
};

export const getSendMessagechatidtestDhiWisetextHeyaIamabotcontrolledbyBC = (
  payload
) =>
  apis.get(
    API_URLS.GET_SEND_MESSAGECHATIDTEST_DHI_WISETEXT_HEYA_IAMABOTCONTROLLEDBY_B_C,
    {
      ...payload,
      params: {
        chat_id: "@your_chat_id",
        text: payload?.data,
        ...payload?.params,
      },
    }
  );

export const getGetChatAdministratorschatidtestDhiWise = (payload) =>
  apis.get(API_URLS.GET_ADMIN, {
    ...payload,
  });

export const getGetChatMembersCountchatidtestDhiWise = (payload) =>
  apis.get(API_URLS.GET_GROUPCOUNT, {
    ...payload,
  });

export const getGetChatchatidtestDhiWise = (payload) =>
  apis.get(API_URLS.GET_CHATINFO, {
    ...payload,
  });

export const postForms = (payload) =>
  apis.post(API_URLS.POST_FORMS, {
    ...payload,
    headers: {
      Authorization:
        "your-auth-token",
      "Content-Type": "application/json",
     
      ...payload?.headers,
    },
    data: {
      title: "Quality Form",
      fields: payload?.data?.map((dt) => {
        const choices = dt?.choice?.split(","); // to split the options and save into one array
        if (dt?.field && dt?.question && dt?.choice) {
          return {
            type: dt?.field,
            title: dt?.question,
            properties: {
              choices: choices?.map((choice) => {
                return {
                  label: choice,
                };
              }),
            },
          };
        } else if (dt?.field && dt?.question) {
          return {
            type: dt?.field,
            title: dt?.question,
          };
        } else {
        }
      }),
    },
  });

export const getResponses = (payload) =>
  apis.get(`https://api.typeform.com/forms/${payload?.id}/responses`, {
    headers: {
      Authorization:
        "your-auth-token",
      ...payload?.headers,
    },
  });

export const putSheet1A1D5valueInputOptionUSERENTERED = (payload) =>
  apis.put(API_URLS.PUT_GOOGLESHEETS, {
    ...payload,
    params: { valueInputOption: "USER_ENTERED", ...payload?.params },
    headers: {
      "Content-type": "application/json",
      Authorization: "your-OAuth2-token",
      ...payload?.headers,
    },
    data: {
      range: "Sheet1!A1:D5",
      majorDimension: "ROWS",
      values: payload?.data?.map((answer) => {
        return answer?.map((x, index) => {
          return answer[index];
        });
      }),
    },
  });
