<template>
  <div class="q-pa-md">
    <q-ajax-bar
      ref="bar"
      position="bottom"
      color="accent"
      size="10px"
      skip-hijack
    />
    </div>
  <div class="q-pa-lg" style="full-width">
    <q-form @submit.prevent="update" class="q-gutter-md">
      <q-markup-table>
        <tr>
          <td>
            <q-input
            v-model="form.name"
            filled
            lazy-rules
            label="Full Name" />
          </td>
          <td>
            <q-input
              v-model="form.bDate"
              filled
              lazy-rules
              type="date"
              label="Date of Birth"
            />
          </td>
          <td>
            <q-select v-model="form.Gender"
            :options="genders"
            filled
            lazy-rules
            label="Gender"/>
          </td>
        </tr>
        <tr>
          <td>
            <q-select
              v-model="form.MartialStatus"
              :options="status"
              filled
              lazy-rules
              label="Martial Status"
            />
          </td>
          <td>
            <q-select
              v-model="form.Nationality"
              :options="nations"
              filled
              lazy-rules
              label="Nationality"
            />
          </td>
          <td>
            <q-select
              v-model="form.Education"
              :options="education"
              filled
              lazy-rules
              label="Education"
            />
          </td>
        </tr>
        <tr class="text-center">
          <td>
            <q-input
            v-model="form.email"
            filled
            lazy-rules
            label="Email 1" />
          </td>
          <td>
            <q-input
            v-model="form.email2"
            filled
            lazy-rules
            label="Email 2" />
          </td>
          <td>
            <q-input
            v-model="form.PhoneNumber1"
            filled
            lazy-rules
            label="Phone Number 1"
            />
          </td>
        </tr>
        <tr class="text-center">
          <td>
            <q-input
              v-model="form.PhoneNumber2"
              filled
              lazy-rules
              label="Phone Number 2"
            />
          </td>
          <td>
            <q-input
              v-model="form.Address1"
              filled
              lazy-rules
              label="Address 1"
            />
          </td>
          <td>
            <q-input
              v-model="form.Address2"
              filled
              lazy-rules
              label="Address 2"
            />
          </td>
        </tr>
        <tr class="text-center">
          <td>
            <q-input
              v-model="form.CivilId"
              filled
              lazy-rules
              label="Civil ID"
            />
          </td>
          <td>
            <q-input
              v-model="form.CivilIdExpiry"
              filled
              lazy-rules
              type="date"
              label="Civil ID Expiry"
            />
          </td>
          <td>
            <q-input
              v-model="form.DLExpiry"
              filled
              lazy-rules
              type="date"
              label="Driver Licence Expiry"
            />
          </td>
        </tr>
        <tr class="text-center">
          <td>
            <q-input
              v-model="form.Passport"
              filled
              lazy-rules
              label="Passport Number"
            />
          </td>
          <td>
            <q-input
              v-model="form.PassportExpiry"
              filled
              lazy-rules
              type="date"
              label="Passport Expiry Date"
            />
          </td>
          <td>
            <q-input
              v-model="form.Employment"
              filled
              lazy-rules
              label="Employment"
            />
          </td>
        </tr>
        <tr class="text-center">
          <td>
            <q-input
              v-model="form.DateOfHire"
              filled
              lazy-rules
              type="date"
              label="Date of Hire"
            />
          </td>
          <td>
            <q-input
              v-model="form.BankAccountNumber"
              filled
              lazy-rules
              label="Bank Account Number"
            />
          </td>
          <td>
            <q-input
            v-model="form.Iban"
            filled
            lazy-rules
            label="IBAN" />
          </td>
        </tr>
        <tr class="text-center">
          <td>
            <q-input
              v-model="form.bankName"
              filled
              lazy-rules
              label="Bank Name"
            />
          </td>
          <td>
            <q-input v-model="form.Salary" filled lazy-rules label="Salary" />
          </td>
        </tr>
      </q-markup-table>
      <div>
        <q-btn label="Submit" type="submit" color="primary" @click="trigger"/>
      </div>
    </q-form>
  </div>
</template>

<script>
import { reactive, computed, onMounted , ref} from "vue";
import { useRoute, useRouter } from "vue-router";
import { getUser, updateUser } from "../boot/firebase";
export default {
  setup() {

    const router = useRouter();
    const route = useRoute();
    const userId = computed(() => route.params.id);
    const form = reactive({
      uid:'',
      name: '',
      email: '',
      Gender:'',
      bDate: '',
      MartialStatus:'',
      Nationality:'',
      Education:'',
      email2:'',
      PhoneNumber1:'',
      PhoneNumber2:'',
      Address1:'',
      Address2:'',
      CivilId:'',
      CivilIdExpiry:'',
      DLExpiry:'',
      Passport:'',
      PassportExpiry:'',
      Employment:'',
      DateOfHire:'',
      BankAccountNumber:'',
      Iban:'',
      bankName:'',
      Salary:''

    });
    onMounted(async () => {
      const user = await getUser(userId.value);
      console.log(user, userId.value);
      form.uid=user.uid
      form.name = user.name
      form.email = user.email
      form.bDate = user.bDate
      form.Gender = user.Gender
      form.EmployeeNumber=user.EmployeeNumber
      form.MartialStatus = user.MartialStatus
      form.Nationality=user.Nationality
      form.Education= user.Education
      form.PhoneNumber1=user.PhoneNumber1
      form.PhoneNumber2=user.PhoneNumber2
      form.email2 = user.email2
      form.Address1 = user.Address1
      form.Address2 = user.Address2
      form.CivilId = user.CivilId
      form.CivilIdExpiry = user.CivilIdExpiry
      form.DLExpiry = user.DLExpiry
      form.Passport = user.Passport
      form.PassportExpiry = user.PassportExpiry
      form.Employment = user.Employment
      form.DateOfHire = user.DateOfHire
      form.BankAccountNumber = user.BankAccountNumber
      form.Iban = user.Iban
      form.bankName = user.bankName
      form.Salary = user.Salary


    });
    const update = async () => {
      await updateUser(userId.value, { ...form });
      router.push("/");
      form.uid = ''
      form.name = ''
      form.email = ''
      form.EmployeeNumber=''
      form.bDate = ''
      form.Gender = ''
      form.MartialStatus = ''
      form.Education= ''
      form.email2 = ''
      form.PhoneNumber1=''
      form.PhoneNumber2=''
      form.Address1 = ''
      form.Address2 = ''
      form.CivilId = ''
      form.CivilIdExpiry = ''
      form.DLExpiry = ''
      form.Passport = ''
      form.PassportExpiry = ''
      form.Employment = ''
      form.DateOfHire =''
      form.BankAccountNumber = ''
      form.Iban = ''
      form.bankName = ''
      form.Salary = ''
    };
    const bar = ref(null)
    function trigger () {
      const barRef = bar.value
      barRef.start()

      setTimeout(() => {
        const barRef = bar.value
        if (barRef) {
          barRef.stop()
        }
      }, Math.random() * 3000 + 1000)
    }
    return { form, update,
    bar,
    trigger,
    genders:["Male","Female"],
    status:["Single","Married","Divorsed","Widowed"],
    nations: [
	"Afghanistan",
	"Albania",
	"Algeria",
	"American Samoa",
	"Andorra",
	"Angola",
	"Anguilla",
	"Antarctica",
	"Antigua and Barbuda",
	"Argentina",
	"Armenia",
	"Aruba",
	"Australia",
	"Austria",
	"Azerbaijan",
	"Bahamas (the)",
	"Bahrain",
	"Bangladesh",
	"Barbados",
	"Belarus",
	"Belgium",
	"Belize",
	"Benin",
	"Bermuda",
	"Bhutan",
	"Bolivia (Plurinational State of)",
	"Bonaire, Sint Eustatius and Saba",
	"Bosnia and Herzegovina",
	"Botswana",
	"Bouvet Island",
	"Brazil",
	"British Indian Ocean Territory (the)",
	"Brunei Darussalam",
	"Bulgaria",
	"Burkina Faso",
	"Burundi",
	"Cabo Verde",
	"Cambodia",
	"Cameroon",
	"Canada",
	"Cayman Islands (the)",
	"Central African Republic (the)",
	"Chad",
	"Chile",
	"China",
	"Christmas Island",
	"Cocos (Keeling) Islands (the)",
	"Colombia",
	"Comoros (the)",
	"Congo (the Democratic Republic of the)",
	"Congo (the)",
	"Cook Islands (the)",
	"Costa Rica",
	"Croatia",
	"Cuba",
	"Curaçao",
	"Cyprus",
	"Czechia",
	"Côte d'Ivoire",
	"Denmark",
	"Djibouti",
	"Dominica",
	"Dominican Republic (the)",
	"Ecuador",
	"Egypt",
	"El Salvador",
	"Equatorial Guinea",
	"Eritrea",
	"Estonia",
	"Eswatini",
	"Ethiopia",
	"Falkland Islands (the) [Malvinas]",
	"Faroe Islands (the)",
	"Fiji",
	"Finland",
	"France",
	"French Guiana",
	"French Polynesia",
	"French Southern Territories (the)",
	"Gabon",
	"Gambia (the)",
	"Georgia",
	"Germany",
	"Ghana",
	"Gibraltar",
	"Greece",
	"Greenland",
	"Grenada",
	"Guadeloupe",
	"Guam",
	"Guatemala",
	"Guernsey",
	"Guinea",
	"Guinea-Bissau",
	"Guyana",
	"Haiti",
	"Heard Island and McDonald Islands",
	"Holy See (the)",
	"Honduras",
	"Hong Kong",
	"Hungary",
	"Iceland",
	"India",
	"Indonesia",
	"Iran (Islamic Republic of)",
	"Iraq",
	"Ireland",
	"Isle of Man",
	"Israel",
	"Italy",
	"Jamaica",
	"Japan",
	"Jersey",
	"Jordan",
	"Kazakhstan",
	"Kenya",
	"Kiribati",
	"Korea (the Democratic People's Republic of)",
	"Korea (the Republic of)",
	"Kuwait",
	"Kyrgyzstan",
	"Lao People's Democratic Republic (the)",
	"Latvia",
	"Lebanon",
	"Lesotho",
	"Liberia",
	"Libya",
	"Liechtenstein",
	"Lithuania",
	"Luxembourg",
	"Macao",
	"Madagascar",
	"Malawi",
	"Malaysia",
	"Maldives",
	"Mali",
	"Malta",
	"Marshall Islands (the)",
	"Martinique",
	"Mauritania",
	"Mauritius",
	"Mayotte",
	"Mexico",
	"Micronesia (Federated States of)",
	"Moldova (the Republic of)",
	"Monaco",
	"Mongolia",
	"Montenegro",
	"Montserrat",
	"Morocco",
	"Mozambique",
	"Myanmar",
	"Namibia",
	"Nauru",
	"Nepal",
	"Netherlands (the)",
	"New Caledonia",
	"New Zealand",
	"Nicaragua",
	"Niger (the)",
	"Nigeria",
	"Niue",
	"Norfolk Island",
	"Northern Mariana Islands (the)",
	"Norway",
	"Oman",
	"Pakistan",
	"Palau",
	"Palestine, State of",
	"Panama",
	"Papua New Guinea",
	"Paraguay",
	"Peru",
	"Philippines (the)",
	"Pitcairn",
	"Poland",
	"Portugal",
	"Puerto Rico",
	"Qatar",
	"Republic of North Macedonia",
	"Romania",
	"Russian Federation (the)",
	"Rwanda",
	"Réunion",
	"Saint Barthélemy",
	"Saint Helena, Ascension and Tristan da Cunha",
	"Saint Kitts and Nevis",
	"Saint Lucia",
	"Saint Martin (French part)",
	"Saint Pierre and Miquelon",
	"Saint Vincent and the Grenadines",
	"Samoa",
	"San Marino",
	"Sao Tome and Principe",
	"Saudi Arabia",
	"Senegal",
	"Serbia",
	"Seychelles",
	"Sierra Leone",
	"Singapore",
	"Sint Maarten (Dutch part)",
	"Slovakia",
	"Slovenia",
	"Solomon Islands",
	"Somalia",
	"South Africa",
	"South Georgia and the South Sandwich Islands",
	"South Sudan",
	"Spain",
	"Sri Lanka",
	"Sudan (the)",
	"Suriname",
	"Svalbard and Jan Mayen",
	"Sweden",
	"Switzerland",
	"Syrian Arab Republic",
	"Taiwan",
	"Tajikistan",
	"Tanzania, United Republic of",
	"Thailand",
	"Timor-Leste",
	"Togo",
	"Tokelau",
	"Tonga",
	"Trinidad and Tobago",
	"Tunisia",
	"Turkey",
	"Turkmenistan",
	"Turks and Caicos Islands (the)",
	"Tuvalu",
	"Uganda",
	"Ukraine",
	"United Arab Emirates (the)",
	"United Kingdom of Great Britain and Northern Ireland (the)",
	"United States Minor Outlying Islands (the)",
	"United States of America (the)",
	"Uruguay",
	"Uzbekistan",
	"Vanuatu",
	"Venezuela (Bolivarian Republic of)",
	"Viet Nam",
	"Virgin Islands (British)",
	"Virgin Islands (U.S.)",
	"Wallis and Futuna",
	"Western Sahara",
	"Yemen",
	"Zambia",
	"Zimbabwe",
	"Åland Islands"
],
education:["Highschool","Diploma","Bachelors","Masters",
           "Phd"] };
  },
};
</script>
