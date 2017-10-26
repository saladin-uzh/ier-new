import React, { Component } from 'react';
import './App.css';
import { Header } from "./comp/Header";
import { Main } from "./comp/Main";
import { Footer } from "./comp/Footer";
import { ContactsBlock } from "./comp/Footer/Contacts/ContactsBlock";
import { DownloadBlock } from "./comp/Footer/Download/DownloadBlock";
import { SubscribeBtn } from "./comp/SubscribeBtn";
import { Preloader } from "./comp/Preloader";
import * as $ from "jquery";
import {Pages} from "./Pages";


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ready: false,
            template: false,
            page: "main"
        };

        this.appLoad = this.appLoad.bind(this);
        this.switchPage = this.switchPage.bind(this);
        this.templateModeOff = this.templateModeOff.bind(this);
    }

    switchPage(name) {
        if (App.state.page !== name) {
            const App = this,
                main = $("#main");

            App.setState({
                template: true
            });

            function showPage(page) {
                App.setState({
                    page: page
                });
            }

            function switcher(name) {
                $.ajax({
                    url: "openPage",
                    data: {
                        page: name
                    },
                    method: 'POST',
                    success: function (page) {
                        showPage(page);
                    },
                    error: function () {
                        alert("Server responded with error and cookies haven't been set!");
                        showPage(name);
                    },
                    complete: function () {
                        alert("Ajax came back");
                    }
                });
            }

            main.slideUp(500, function () {
                $("#root").animate({
                    height: "100%"
                }, {
                    duration: 250,
                    complete: () => {
                        switcher(name)
                    }
                });
            });
        }
    }

    templateModeOff() {
        const main = $("#main");

        this.setState({
            template: false
        });

        main.slideUp(500, function () {
            $("#root").css({
                height: "auto"
            });
        });
    }

    appLoad() {
        let app = this;
        setTimeout(function () {
            app.setState({
                ready: true
            });
        }, 2000);
    }

  render() {
    return (
      <div
          className={"App " + (
              this.state.template ?
                  "template" :
                  "content"
          )}
          onLoad={this.appLoad}
      >
          <Header passValue={this.switchPage}/>
          <Main onLoad={this.templateModeOff}/>
          <Pages page={this.state.page}/>
          <Footer/>
          <ContactsBlock/>
          <DownloadBlock/>
          <SubscribeBtn/>
          <Preloader state={this.state.ready}/>
      </div>
    );
  }
}

export default App;
