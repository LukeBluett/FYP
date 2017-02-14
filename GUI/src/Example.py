#!/usr/bin/env python
#Python with GTK source file.

# Source: Can+~ https://ubuntuforums.org/showthread.php?t=762030

import gtk, gtk.glade

class mainWindow:
    def event_destroy(self, widget, data=None):
        gtk.main_quit()

    def event_debug(self, widget, data=None):
        print "widget %s called with data %s" % (widget, data)

    def __init__(self):
        self.xml = gtk.glade.XML("gladefile.glade")
        self.win = self.xml.get_widget("MainWindow")

        #Signals
        signals = {
                "destroy_event" : self.event_destroy,
                "my_event" : self.event_debug
        }

        self.win.connect("destroy", self.event_destroy, None)
        self.xml.signal_autoconnect(signals)

        self.win.show_all()

    def main(self):
        gtk.main()

if __name__ == "__main__":
    mwin = mainWindow()
    mwin.main()

