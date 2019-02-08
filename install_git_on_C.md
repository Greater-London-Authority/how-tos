The Git for Windows installer default is to install to your roaming profile which bloats the profile.  There is no option within the installer to select installation directory.  To get around this do the following:

1. Download Git for Windows installer (https://git-scm.com/download/win)
1. Save it onto the C drive (you will need admin password for this)
1. Open cmd.exe (type cmd into start menu search.  You may need to right click and run as admin)
1. Change directory to wherever you have saved the installer (e.g. for C drive root type: `chdir "C:\"`)
1. Run the installer from the command line `Git-2.20.0-64-bit.exe /DIR="C:\Program Files\git"`.  Change the .exe filename to match whichever version you have downloaded, and the DIR filepath to wherever you want to install to.
The installer GUI will launch - accept all the defaults unless you particularly know what you are doing.

