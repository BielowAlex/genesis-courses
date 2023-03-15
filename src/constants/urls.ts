const baseUrl = process.env.REACT_APP_API;

const urls = {
  courses: 'core/preview-courses',
  token: 'auth/anonymous?platform=subscriptions',
};

export default baseUrl;
export { urls };
