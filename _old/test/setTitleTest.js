import "./testbase"
import  reducers from "../web/app/reducers/index"

describe('reducers', () => {
  it('should handle actions', () => {
    reducers(undefined, {"type":"@@INIT"}).should.containSubset({"applicationTitle":"MyApp","isLoggedIn":false});
  });
});
