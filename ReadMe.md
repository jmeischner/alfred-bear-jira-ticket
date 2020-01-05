# What's this?
This is a template which could be used in combination with [alfred](https://www.alfredapp.com), [bear](https://bear.app) and the [alfred-bear workflow](https://github.com/jmeischner/alfred-bear).

This should serve as a starting point to build an own template to work with jira tickets on an individual basis. To do private notes, quick thoughts and brainstorming and create design plans for a given ticket in the context of the existing external informations to that task.

This script part of this template asks a Jira instance for ticket specifics which then can be used inside the markdown part.

## How it looks
With the *Duotone Snow* theme it could look like
![Screenshot](https://github.com/jmeischner/alfred-bear-jira-ticket/blob/public/screenshot.png?raw=true)

## Possible Placeholder
- title
- description
- labels
- creator
    - name
    - mail
- subtasks
- type
    - name
    - isSubtask
- project
- comments *(is an array)*
    - author
    - text
- acceptanceCriteria

# Installation
Clone or download this repository and put it e.g. into your *bearTemplateDirectory* - `~/.bear-templates` - which is usually the place where your *bearTemplateIndex* - `index.yml` - file is located.

Then put the following lines to your *index.yml*

```yml
  - title: "Jira Ticket"
    file: "<PathToRepo>/Jira Ticket.md"
    script: "<PathToRepo>/ticket.js"
    var:
      JIRA_USER: "<JIRAUser>"
      JIRA_URL: "<JIRABaseUrl>"
      JIRA_PREFIX: "<JIRATicketPrefix>"
      ACCEPTANCE_CRITERIA: "<CustomFieldName>"
    question: "Insert Ticketnumber"
```

### Variables
**PathToRepo**
Path where you put the source code of this repository to. Either absolute or relative to the `index.yml`.

**JIRAUser**
The email address used to login to the Jira instance.

**JIRABaseUrl**
The url of the Jira instance (e.g. https://jira.atlassian.com).

**JIRATicketPrefix**
The prefix of all your Jira tickets (e.g. *DEV*). If you work in different projects with different prefixes leave this variable empty and insert the full jira ticket number during the workflows *Insert Ticketnumber* question.

**CustomFieldName**
If you have a custom field inside your Jira ticket which handles the *acceptance criteria* then you can specifiy the custom field name here (e.g. *customfield_10207*).