const rp = require('request-promise');
const J2M = require('j2m');

/**
 * File is in gitignore to save secrets.
 * It has the form
 * 
 * ```js
 * module.exports = {
 *  API_TOKEN: XXX
 * }
 * ```
 */
const secret = require('./secret');

const getData = async variables => {

    const prefix = variables.JIRA_PREFIX.endsWith('-') ? variables.JIRA_PREFIX : `${variables.JIRA_PREFIX}-`;

    const options = {
        uri: `${variables.JIRA_URL}/rest/api/latest/issue/${prefix}${variables.answer}`,
        json: true
    }

    const ticket = await rp(options).auth(variables.JIRA_USER, secret.API_TOKEN);
    const fields = ticket.fields;

    return {
        JIRA_PREFIX: prefix,
        labels: fields.labels,
        creator: {
            name: fields.creator.displayName,
            mail: fields.creator.emailAddress
        },
        subtasks: fields.subtasks,
        type: {
            name: fields.issuetype.name,
            isSubtask: fields.issuetype.subtask
        },
        project: fields.project.name,
        description: J2M.toM(fields.description).trim(),
        acceptanceCriteria: J2M.toM(fields[variables.ACCEPTANCE_CRITERIA]).replace(/(?:^)\*/, "- [ ]").replace(/(?:\n)\*/g, "\n- [ ]").trim(),
        title: fields.summary.trim(),
        comments: fields.comment.comments ? fields.comment.comments.map(c => {
            return {
                author: c.author.displayName,
                text: J2M.toM(c.body).trim()
            }
        }) : ''
    }
}

module.exports = getData;