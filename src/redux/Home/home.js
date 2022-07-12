const url = 'https://financialmodelingprep.com/';
const apiKey = '64a2beffb1ed5853c62ace209ff8fe71';
const financialStatementList = `${url}api/v3/financial-statement-symbol-lists?apikey=${apiKey}`;

const GETLIST = 'GETLIST';

const GetList = (list) => ({
  type: GETLIST,
  rockets,
});

export const FetchList = () => (dispatch) => {
  const List = [];
  fetch(url, {
    headers: {
      'Content-Type': 'application/json',
      accept: 'application/json',
    },
  })
    .then((response) => response.json())
    .then((result) => {
      const Data = Object.entries(result);
      Data.forEach((element) => {
        List.push({
          id: element[1].id,
          name: element[1].rocket_name,
          description: element[1].description,
          img: element[1].flickr_images[0],
        });
      });
      dispatch(GetRocket(List));
    });
};

function RocketsReducer(state = [], action) {
  switch (action.type) {
    case GETLIST:
      return [...action.rockets];
    case RESERVEROCKET:
      return state.map((rocket) => {
        if (rocket.id !== action.rocketReserved) {
          return rocket;
        }
        return { ...rocket, reserved: true };
      });
    case CANCELRESERVE:
      return state.map((rocket) => {
        if (rocket.id !== action.rocketCanceled) {
          return rocket;
        }
        return { ...rocket, reserved: false };
      });
    default:
      return state;
  }
}

export default RocketsReducer;
