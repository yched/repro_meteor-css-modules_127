Reproduction repo for https://github.com/nathantreid/meteor-css-modules/issues/127

Sample meteor 1.8 app created with `meteor create --react`

- Install with `meteor npm i`
- Run with `meteor run`
- Visit http://localhost:3000/
- The 3 displayed items (local style with SASS, global style with SASS, global style plain CSS) should be green 

With nathantreid:css-modules@4.0.0, global styles do not get applied (SASS or plain CSS)
With nathantreid:css-modules@3.1.4, everything works
 
