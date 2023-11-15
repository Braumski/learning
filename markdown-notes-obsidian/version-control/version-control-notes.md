# Version Control
___

see also: [testing](testing.md)

### Course Goals 🥅
- Implement version control systems.
- Navigate and configure using the command line.
- Manage code revisions. 
- Create and use a GitHub repository.

## Version control 🚦
Version control is a system that records all changes and modifications to files for tracking purposes. It keeps track of changes and provides access to history, allowing you to revert to a previous state.

Here are some of the benefits of version control: 
- Revision history
- Identity 
- Collaboration
- Automation
- Efficiency

![Version Control](https://miro.medium.com/v2/resize:fit:2036/1*E4povWZ5H-K3OaguFQJ0IQ.png)

__Revision history__ 📖 provides a record of all changes in a project. It provides developers with the ability to revert to a stable point in time in cases where code edits cause issues or bugs. The ability to roll back to a version allows teams to work faster and deliver code with more confidence.

In an __agile__ process, a team normally plan and execute two weeks of work to complete, which is called an iteration. Each iteration has a list of tasks to complete before the two weeks ends. These tasks, while complex in some cases, are aided by having version control in place. 

## Systems of version control and tools 🔨
___
There are many different version control system available. For example, Subversion, Perforce, AWS Code Commit, Mercurial, and Git to name a few. Version control systems can be split into two types or categories.

 __Centralized Version__ control systems and __Distributed Version __ control systems. Both types are quite similar, but they also have some key differences which set them apart from each other.



#### Centralized Version Control 

CVCS for short, contains a server and a client. The server contains the main repository that houses the full history of version of the code base. Developers working on projects using a centralized system need to pull down the code from the __server__ to their local machine. Pushing and viewing the history of changes requires that you are connected to the server in order to retrieve and view them.

#### Distributed Version Control

DVCS for short. You still need to pull down code from a server to view the latest changes. They key difference is that _every user_ is essentially a server and not a client. This means that every time you pull down code from the distributed model, __you have the entire history of changes on your local system__.

![Distributed Version Control](https://www.smartsheet.com/sites/default/files/IC-Version-Control-Process.jpg)

## Agile methodology 👟

Agile development is a term that's used to describe iterative software development. Iterative software development shortens the DevOps life cycle by completing work in short increments, usually called _sprints_. 

Sprints are typically one to four weeks long. Agile Development is often contrasted with traditional or waterfall development, which plans larger projects up front and completes them according to the plan

![Agile methodology](https://www.nvisia.com/hubfs/agile-methodology-chicago.png)

#### Integrate Early and Often

Continuous integration and continuous delivery (CI/CD) set up your team for the fast pace of Agile development. As soon as possible, automate the build, test, and deployment pipelines. Set up that automation as one of the first tasks your team tackles when you start a new project.
