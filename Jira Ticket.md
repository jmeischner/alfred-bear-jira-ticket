# {{JIRA_PREFIX}}{{answer}} {{title}}
~ by *{{creator.name}}* [{{type.name}}]
---
#arbeit/ticket/{date:yyyy}/{date:MM} #arbeit/state/started
---
::Link::[{{JIRA_PREFIX}}{{answer}}](https://verimi.atlassian.net/browse/{{JIRA_PREFIX}}{{answer}})

## Description
{{description}}

## Acceptance Criteria
{{acceptanceCriteria}}

- [ ] Are these clear and unambiguous?

## Comments
{{#each comments}}
```md
{{text}}
```
~ by *{{author}}*

{{/each}}

## Brainstorming?


## Any Complications?
