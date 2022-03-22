        function OpenProject(URL, ProjectID, ShowDescID) {
            if (MobileChecker()) {
                PlayVideo(true, ProjectID);
                if (ShowDescID === str.includes("work")) {
                    ShowDescWork(ShowDescID);
                } else {
                    ShowDescPersonal(ShowDescID);
                }
            } else {
                if (URL !== null) {
                    window.open(URL, "_self");
                }
            }
        }



        function PlayVideo(IfPlay, ProjectElement) {
            var VideoElement6 = ProjectElement.firstElementChild.getElementsByTagName('video')[0];
            if (CheckForOpenProject) {}
            if (IfPlay && CheckForOpenProject != false) {
                VideoElement6.play();
            } else {
                VideoElement6.pause();

            }


            function CheckForOpenProject() {

                let ActiveProject = document.getElementsByClassName("project-con-descbox-active");
                let ActiveProject2 = document.getElementsByClassName("project-con-box-active");


                if (ActiveProject.length > 0 || ActiveProject2.length > 0) {
                    return true;
                } else {
                    return false;
                }
            }
        }




        function ExpandProject(Index, Element2) {

            let ActiveProject = document.getElementsByClassName("project-con-descbox-active");
            let ActiveProject2 = document.getElementsByClassName("project-con-box-active");


            if (ActiveProject.length > 0 || ActiveProject2.length > 0) {
                ScrollProjects(0);
                CloseActiveProject();
            } else {


                Element2.classList.add("project-con-box-active")
                Element2.nextElementSibling.classList.add("project-con-descbox-active");

                ScrollProjects(Index);
            }

            function CloseActiveProject() {
                let ActiveProject1 = document.getElementsByClassName("project-con-descbox-active");
                let ActiveProject2 = document.getElementsByClassName("project-con-box-active");

                if (ActiveProject.length > 0) {
                    ActiveProject1[0].classList.remove("project-con-descbox-active");
                }
                if (ActiveProject2.length > 0) {
                    ActiveProject2[0].classList.remove("project-con-box-active");
                }


            }
        }

        function ScrollProjects(Index) {

            var SlideClass = document.getElementById("ProjectSlide");
            var rrr = Index * 145 + 'px';
            var asdasd = "calc(" + rrr + " - 50%)";

            SlideClass.style.left = asdasd;
        }
