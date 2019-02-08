# Using a local repository 
Use this method if:
- You have sensitive data that cannot leave the GLA's servers
- You don't want to make your project public

## Description
The central repository is a folder called *my_project_repo* which contains a bare repository.  'Bare' means that you can't see any of the folder or file structures within the repository.  This ensures that nobody can edit the central repository directly and mess up the git workflow.

Each user clones the repository onto their M drive so that they have a local working copy.  When the central repository is cloned, a folder called *my_project_repo* will appear in the M drive with the folder and file structure visible inside.  Each user works on their local copy, and when ready pushes the changes up the central repository.

A hook saved in the .git folder of the central repository runs a script to update the live folder called *my_project' whenever a push is made to the central repository.  The live folder will be overwritten with whatever is on the master branch of the central repository.  Anyone with access to the live folder can look through the files and folders, and run any code there without upsetting the git workflow.  However, any changes made there will disappear the next time a push is made to the central repository.  This means that the live folder is essentially read-only.

## Schema
![alt text](pics/git_local_workflow.png)

## Set-up steps
1. Initialise central repo as a bare repo
2. create a file called '' inside the hook folder in the .git foler of the central repo
3. Clone to local
4. Add some files to local, commit and push
5. 

# Using github
