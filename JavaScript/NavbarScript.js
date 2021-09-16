        function TogglePanel() {
            if (document.getElementById("SidePanel").classList.contains("navbar-sidepanel-closed")) {
                document.getElementById("SidePanel").classList.remove("navbar-sidepanel-closed");
                document.getElementById("Navbar-Panel-Shadow").style.display = "block";
                document.getElementById("Navbar-Panel-Shadow").style.background = "hsla(0, 0%, 0%, 0.5)";

                $("body").css("overflow", "hidden");
            } else {
                ClosePanel();
            }
        }


        function ClosePanel() {
            document.getElementById("SidePanel").classList.add("navbar-sidepanel-closed");
            document.getElementById("Navbar-Panel-Shadow").style.background = "hsla(0, 0%, 0%, 0)";
            document.getElementById("Navbar-Panel-Shadow").style.display = "none";

            $("body").css("overflow", "auto");

        }