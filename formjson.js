export default {
  "form": {
    "title": "Demo : Configrable Form",
    "id": "demo1",
    "submit": {
      "method": "POST", // PUT or POST
      "endpoint": ""
    },
    "elements": [
      {
        "label": "Username",
        "element": "text", // email, password, file & url
        "key": "name", // Unique identifier
        "placeholder": "Enter your good name",
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
        "value": "m",
        "disable": true, //true or false
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
          },{
            "id": "3",
            "name": "Javascript",
            "value": "javascript",
            "checked": true, //true or false
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
        "label": "Age",
        "element": "radio",
        "key": "age", // Unique identifier
        "disable": false, //true or false
        "list": [
          {
            "id": "1",
            "name": "20-25",
            "value": "20-25",
            "checked": false, //true or false
            "disable": false //true or false
          },{
            "id": "2",
            "name": "26-30",
            "value": "26-30",
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
        "label": "Date",
        "element": "date",
        "key": "date", // Unique identifier
        "value": new Date(),
        placeholder : "Select Date",
        "disable": false, // true or false
        "from": undefined,
        "today": "",
        "to": "20-02-2018",
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
        "label": "Type",
        "element": "autocomplete",
        "key": "type", // Unique identifier
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
