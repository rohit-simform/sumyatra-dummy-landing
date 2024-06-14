const BaseUrl = process.env.API_END_POINT;
export const JOIN_WAIT_FORM_API: string = BaseUrl
  ? `${BaseUrl}/contact-us`
  : "https://dev-api.sumyatra.com/api/v1/contact-us";
