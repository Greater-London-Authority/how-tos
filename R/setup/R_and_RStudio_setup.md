*Please add to and edit this page to improve the resource*

# How to get started with R and RStudio on GLA machines

To downlad and install R (the programming language) and RStudio (a nice interface for working with R):

1) Download [R for windows](https://www.stats.bris.ac.uk/R/)
1) Download the free version of [RStudio Desktop](https://rstudio.com/products/rstudio/download/?utm_source=downloadrstudio&utm_medium=Site&utm_campaign=home-hero-cta)
1) Install both of these on the C drive (you will need to find somebody with administrator privileges to do this)

Installing R gives you access to 'base R' functions.  There are more functions which have been written in addition to base R and these can be found in 'packages'.  You are very likely to use at least one package in any piece of work.  [CRAN](https://cran.r-project.org/) is a store which holds most of the packages that you are likely to need.  All packages which are hosted on CRAN have passed rigorous standards (although as it is open source they come with no guarantees!).

To install packages from CRAN:

1) Create a folder in your mdrive called 'R_library'.  This is where any packages you install will be stored
1) Download the [Rprofile file](.Rprofile) and save it to your M drive (not in any sub-folders).  This contains instructions to R on where to save any packages you install and can be edited using notepad.  The Rprofile file must be stored in the top level of your M drive so that R can find it when it starts up
2) If you have already opended RStudio, close it and reopen it as R only reads the .Rprofile file at startup
2) To install a package, open RStudio and find the 'Console' which should be at the bottom left of the window
3) Type install.packages("package_name"). For example, to install the tidyverse package type install.packages("tidyverse") and hit enter

