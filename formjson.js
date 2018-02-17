export default {
  "form": {
    "title": "Demo Configrable Form",
    "id": "demo1",
    "submit": {
      "method": "POST", // PUT or POST
      "endpoint": ""
    },
    "elements": [
      {
        "label": "Name",
        "element": "text", // email, password, file & url
        "key": "name", // Unique identifier
        "placeholder": "Enter your good name",
        "value": "Abhishar",
        "disable": false, // true or false
        "validations": {
          require: [
            {
              value: true, // true or false
              err: "err Message"
            }
          ],
          regex: [
            {
              exp: "", // Regex exp
              err: "err Message"
            }
          ],
          custom: [
            {
              exp: '', // Regex exp
              err: ''
            }
          ]
        }
      }, {
        "label": "Password",
        "element": "password",
        "key": "password", // Unique identifier
        "placeholder": "Enter password",
        "value": "",
        "disable": false, // true or false
        "validations": {
          require: [
            {
              value: true, // true or false
              err: "err Message"
            }
          ],
          regex: [
            {
              exp: "", // Regex exp
              err: "err Message"
            }
          ],
          custom: [
            {
              exp: '',
              err: ''
            }
          ]
        }
      }, {
        "label": "Gender",
        "element": "select",
        "key": "gender", // Unique identifier
        "value": 'm',
        "disable": false, //true or false
        "multiple": false, //true or false
        "placeholder": "Select Gender",
        "options": {
          "list": [
            {
              "id": "1",
              "name": "Male",
              "value": "m"
            },{
              "id": "2",
              "name": "Female",
              "value": "f"
            }
          ],
          "method": "GET", // Api call if option list is empty
          "endpoint": "",
          "dependent": "element_id"
        },
        "validations": {
          require: [
            {
              value: true, // true or false
              err: "err Message"
            }
          ]
        }
      }, {
        "label": "Skills",
        "element": "checkbox",
        "key": "skills", // Unique identifier
        "disable": false, //true or false
        "list": [
          {
            "id": "1",
            "name": "React",
            "value": "react",
            "checked": true, //true or false
            "disable": false //true or false
          },{
            "id": "2",
            "name": "Angular",
            "value": "angular",
            "checked": false, //true or false
            "disable": true //true or false
          }
        ],
        "method": "GET",
        "endpoint": "",
        "validations": {
          require: [
            {
              value: true, // true or false
              err: "err Message"
            }
          ]
        }
      }, {
        "label": "Adult",
        "element": "radio",
        "key": "adult", // Unique identifier
        "disable": false, //true or false
        "list": [
          {
            "id": "1",
            "name": "Yes",
            "value": "yes",
            "checked": false, //true or false
            "disable": false //true or false
          },{
            "id": "2",
            "name": "No",
            "value": "no",
            "checked": false, //true or false
            "disable": false //true or false
          }
        ],
        "method": "GET",
        "endpoint": "",
        "validations": {
          require: [
            {
              value: true, // true or false
              err: "err Message"
            }
          ]
        }
      }, {
        "label": "Say somthing",
        "element": "textarea",
        "key": "saysomething", // Unique identifier
        "value": "Cool!",
        "placeholder" : "Say Somthing",
        "disable": false,
        "validations": {
          require: [
            {
              value: true, // true or false
              err: "err Message"
            }
          ],
          regex: [
            {
              exp: "", // Regex exp
              err: "err Message"
            }
          ],
          custom: [
            {
              exp: '',
              err: ''
            }
          ]
        }
      }, {
        "label": "",
        "element": "date",
        "key": "", // Unique identifier
        "value": "",
        "disable": false, // true or false
        "from": "",
        "today": "",
        "to": "",
        "format": "DD-MM-YYYY",
        "validations": {
          require: [
            {
              value: true, // true or false
              err: "err Message"
            }
          ]
        }
      }, {
        "label": "",
        "element": "autocomplete",
        "key": "", // Unique identifier
        "disable": true, // true or false
        "min": "", //default 3 if non is given
        "endpoint": "",
        "method": "GET",
        "validations": {
          require: [
            {
              value: true, // true or false
              err: "err Message"
            }
          ]
        }
      }
    ]
  }
}
