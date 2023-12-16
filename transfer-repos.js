const axios = require('axios');

const token = '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';
const orgName = 'JunbolWincAcademy'; //organization
const repos = [
  'lasagna-recipe',
  'recipes',
  'WincAcademy_JS_Opdracht_24_Javascript_EindProject',
  'Winc_Academy_JS_Opdracht_23_Javascript_Manipulating_the_DOM ',
  'WincAcademy_JS_Opdracht_22_Javascript_functions_Guess_the_number_game',
  'WincAcademy_JS_Opdracht_21_Javascript_functions_Iterators_Old_New',
  'Wind_Academy_JS_Opdracht_20_Javascript_functions_While_For_Loops_Exercises',
  'WincAcademy_Javascript_Opdracht_19_Javascript_functions_callingFunctions',
  'WincAcademy_Javascript_Opdracht_19_Javascript_functions_callingFunctions_Debugging Public',
  'WincAcademy_Functions_3ways ',
  'WincAcademy_Functions_Opdracht_17_Javascript_functions_return',
  'WincAcademy_Javascript_arguments',
  'WincAcademy_Javascript_Opdracht_15_Javascript_functions',
  'WincAcademy_Javasript_Opdracht_14_Javascript_objects',
  'WincAcademy_Opdracht_13_Javascript_comparison_logical_operators',
  'Opdracht_12_Javascript_if_statements',
  'WincAcademy_Opdracht_11_Javascript_PowershellComandLine',
  'WincAcademy_Opdracht_11_Javascript_Practice_Node',
  'WincAcademy_Opdracht_10_HTML-CSS_Hackaton_Santa_Teresa',
  'WincAcademy-Opdracht_9_HTML_Groter_Formulier',
  'WincAcademy-Opdracht_8_HTML_Form2',
  'WincAcademy_WebDev_CSS_Opdracht_7_MediaQuery',
  'Opdracht_5_CSS_BoxModel ',
  'Opdracht_8_HTML_Form',
  'Winc-Academy-Opdracht_4',
  'WincAcademy_WebDev_Opdracht_2',
  'WincAcademy_WebDevelopment_Eerste_HTML_pag',
  'WincAcademy',
  'REPO',
  'REPO',
  'REPO',
  'REPO',
  'REPO',
  'REPO',
  'REPO',
  'REPO',
  'REPO',
  'REPO',
  'REPO',
  'REPO',
  'REPO',
  'REPO',
  'REPO',
  'REPO',
]; // List your repositories here: 'YOUR REPO', 'YOUR REPO'

const githubApi = 'https://api.github.com';
const headers = {
  Authorization: `token ${token}`,
  Accept: 'application/vnd.github.v3+json',
};

const transferRepo = async (repoName) => {
  const url = `${githubApi}/repos/Junbol/${repoName}/transfer`;
  try {
    const response = await axios.post(url, { new_owner: orgName }, { headers });
    console.log(`Transferred ${repoName}: `, response.data);
  } catch (error) {
    console.error(`Error transferring ${repoName}: `, error.response.data);
  }
};

const main = async () => {
  for (const repo of repos) {
    await transferRepo(repo);
  }
};

main();
