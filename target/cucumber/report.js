$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("MyProfile.feature");
formatter.feature({
  "id": "myprofile",
  "tags": [
    {
      "name": "@MyProfile",
      "line": 1
    }
  ],
  "description": "",
  "name": "MyProfile",
  "keyword": "Feature",
  "line": 2
});
formatter.background({
  "description": "",
  "name": "Open application on home screen",
  "keyword": "Background",
  "line": 4,
  "type": "background"
});
formatter.step({
  "name": "Samsung Futebol is opened on home screen",
  "keyword": "Given ",
  "line": 5
});
formatter.step({
  "name": "App menu is opened",
  "keyword": "And ",
  "line": 6
});
formatter.step({
  "name": "MyProfile option is selected",
  "keyword": "And ",
  "line": 7
});
formatter.match({
  "location": "StepDefsMyProfile.Samsung_Futebol_is_opened_on_home_screen()"
});
formatter.result({
  "duration": 12263829786,
  "status": "failed",
  "error_message": "cucumber.runtime.CucumberException: Failed to instantiate class com.sec.samsungfuteboltest.glue.StepDefsMyProfile\r\n\tat cucumber.runtime.java.DefaultJavaObjectFactory.cacheNewInstance(DefaultJavaObjectFactory.java:44)\r\n\tat cucumber.runtime.java.DefaultJavaObjectFactory.getInstance(DefaultJavaObjectFactory.java:30)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:35)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:38)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:268)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:45)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:40)\r\n\tat cucumber.runtime.model.CucumberScenario.runBackground(CucumberScenario.java:45)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:34)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:83)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:77)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:37)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:82)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:50)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:38)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:467)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:683)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:390)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:197)\r\nCaused by: java.lang.reflect.InvocationTargetException\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:57)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:526)\r\n\tat cucumber.runtime.java.DefaultJavaObjectFactory.cacheNewInstance(DefaultJavaObjectFactory.java:38)\r\n\t... 33 more\r\nCaused by: org.openqa.selenium.WebDriverException: Session [d3d3eb05-e31f-4e2c-94fb-c57100fba1d4] not available and is not among the last 1000 terminated sessions.\nActive sessions are[]\nCommand duration or timeout: 11.89 seconds\nBuild info: version: \u00272.44.0\u0027, revision: \u002776d78cf\u0027, time: \u00272014-10-23 20:03:00\u0027\nSystem info: host: \u0027Lab1-LucasG\u0027, ip: \u002710.4.0.32\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.7.0_51\u0027\nDriver info: io.appium.java_client.android.AndroidDriver\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:57)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:526)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:204)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:156)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:599)\r\n\tat io.appium.java_client.AppiumDriver.execute(AppiumDriver.java:180)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:240)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:126)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:153)\r\n\tat io.appium.java_client.AppiumDriver.\u003cinit\u003e(AppiumDriver.java:109)\r\n\tat io.appium.java_client.android.AndroidDriver.\u003cinit\u003e(AndroidDriver.java:39)\r\n\tat com.sec.samsungfuteboltest.glue.StepDefs.\u003cinit\u003e(StepDefs.java:72)\r\n\tat com.sec.samsungfuteboltest.glue.StepDefsMyProfile.\u003cinit\u003e(StepDefsMyProfile.java:13)\r\n\t... 38 more\r\nCaused by: org.openqa.grid.common.exception.GridException: Session [d3d3eb05-e31f-4e2c-94fb-c57100fba1d4] not available and is not among the last 1000 terminated sessions.\nActive sessions are[]\r\n\tat org.openqa.grid.internal.ActiveTestSessions.getExistingSession(ActiveTestSessions.java:110)\r\n\tat org.openqa.grid.internal.Registry.getExistingSession(Registry.java:423)\r\n\tat org.openqa.grid.web.servlet.handler.RequestHandler.getSession(RequestHandler.java:238)\r\n\tat org.openqa.grid.web.servlet.handler.RequestHandler.process(RequestHandler.java:119)\r\n\tat org.openqa.grid.web.servlet.DriverServlet.process(DriverServlet.java:83)\r\n\tat org.openqa.grid.web.servlet.DriverServlet.doGet(DriverServlet.java:61)\r\n\tat javax.servlet.http.HttpServlet.service(HttpServlet.java:707)\r\n\tat javax.servlet.http.HttpServlet.service(HttpServlet.java:820)\r\n\tat org.seleniumhq.jetty7.servlet.ServletHolder.handle(ServletHolder.java:565)\r\n\tat org.seleniumhq.jetty7.servlet.ServletHandler.doHandle(ServletHandler.java:479)\r\n\tat org.seleniumhq.jetty7.server.session.SessionHandler.doHandle(SessionHandler.java:225)\r\n\tat org.seleniumhq.jetty7.server.handler.ContextHandler.doHandle(ContextHandler.java:1031)\r\n\tat org.seleniumhq.jetty7.servlet.ServletHandler.doScope(ServletHandler.java:406)\r\n\tat org.seleniumhq.jetty7.server.session.SessionHandler.doScope(SessionHandler.java:186)\r\n\tat org.seleniumhq.jetty7.server.handler.ContextHandler.doScope(ContextHandler.java:965)\r\n\tat org.seleniumhq.jetty7.server.handler.ScopedHandler.handle(ScopedHandler.java:117)\r\n\tat org.seleniumhq.jetty7.server.handler.HandlerWrapper.handle(HandlerWrapper.java:111)\r\n\tat org.seleniumhq.jetty7.server.Server.handle(Server.java:349)\r\n\tat org.seleniumhq.jetty7.server.AbstractHttpConnection.handleRequest(AbstractHttpConnection.java:452)\r\n\tat org.seleniumhq.jetty7.server.BlockingHttpConnection.handleRequest(BlockingHttpConnection.java:47)\r\n\tat org.seleniumhq.jetty7.server.AbstractHttpConnection.headerComplete(AbstractHttpConnection.java:884)\r\n\tat org.seleniumhq.jetty7.server.AbstractHttpConnection$RequestHandler.headerComplete(AbstractHttpConnection.java:938)\r\n\tat org.seleniumhq.jetty7.http.HttpParser.parseNext(HttpParser.java:634)\r\n\tat org.seleniumhq.jetty7.http.HttpParser.parseAvailable(HttpParser.java:230)\r\n\tat org.seleniumhq.jetty7.server.BlockingHttpConnection.handle(BlockingHttpConnection.java:66)\r\n\tat org.seleniumhq.jetty7.server.bio.SocketConnector$ConnectorEndPoint.run(SocketConnector.java:254)\r\n\tat org.seleniumhq.jetty7.util.thread.QueuedThreadPool.runJob(QueuedThreadPool.java:599)\r\n\tat org.seleniumhq.jetty7.util.thread.QueuedThreadPool$3.run(QueuedThreadPool.java:534)\r\n\tat java.lang.Thread.run(Unknown Source)\r\n"
});
formatter.match({
  "location": "StepDefsMyProfile.App_menu_is_opened()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefsMyProfile.MyProfile_option_is_selected()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "id": "myprofile;edit-nickname-sucess",
  "tags": [
    {
      "name": "@test",
      "line": 8
    }
  ],
  "description": "",
  "name": "Edit nickname sucess",
  "keyword": "Scenario",
  "line": 9,
  "type": "scenario"
});
formatter.step({
  "name": "Icon to edit nickname is tapped",
  "keyword": "When ",
  "line": 10
});
formatter.step({
  "name": "Nickname \"SSE\" is filled",
  "keyword": "And ",
  "line": 11
});
formatter.step({
  "name": "Icon to edit nickname is tapped",
  "keyword": "And ",
  "line": 12
});
formatter.step({
  "name": "Nickname \"SSE\" is saved",
  "keyword": "Then ",
  "line": 13
});
formatter.match({
  "location": "StepDefsMyProfile.Icon_to_edit_nickname_is_tapped()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "SSE",
      "offset": 10
    }
  ],
  "location": "StepDefsMyProfile.Nickname_is_filled(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefsMyProfile.Icon_to_edit_nickname_is_tapped()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "SSE",
      "offset": 10
    }
  ],
  "location": "StepDefsMyProfile.Nickname_is_saved(String)"
});
formatter.result({
  "status": "skipped"
});
});