# {{JIRA_PREFIX}}{{answer}} {{title}}
~ by *{{creator.name}}* [{{type.name}}]
---
#work/ticket/{date:yyyy}/{date:MM} #work/state/started
---
::Link::[{{JIRA_PREFIX}}{{answer}}]({{JIRA_URL}}/browse/{{JIRA_PREFIX}}{{answer}})

## Description
{{description}}

## Acceptance Criteria
{{acceptanceCriteria}}

- [ ] Are these clear and unambiguous?
---
## Brainstorming




## Any Complications?


---
## Comments
{{#each comments}}
```md
{{text}}
```
~ by *{{author}}*

{{/each}}